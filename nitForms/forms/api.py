from rest_framework import viewsets, permissions
from .serializers import *
from .models import *
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class CreateFormsViewSet(viewsets.ModelViewSet):
    permission_class = [permissions.IsAuthenticated]
    serializer_class = CreateFormsSerializer

    def get_queryset(self):
        return self.request.user.createForm.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class FormNameViewSet(viewsets.ModelViewSet):
    permission_class = [permissions.IsAuthenticated]
    serializer_class = FormNameSerializer
    queryset = FormName.objects.all()


class GeneralFormsViewSet(viewsets.ModelViewSet):
    queryset = GeneralForms.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = GeneralFormsSerializer


class PostView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        posts_serializer = PostSerializer(data=request.data)
        if posts_serializer.is_valid():
            posts_serializer.save()
            return Response(posts_serializer.data,
                            status=status.HTTP_201_CREATED)
        else:
            print('error', posts_serializer.errors)
            return Response(posts_serializer.errors,
                            status=status.HTTP_400_BAD_REQUEST)


class sharedUsersViewSet(viewsets.ModelViewSet):
    queryset = sharedUsers.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = sharedUsersSerializer


class notingTemplateViewSet(viewsets.ModelViewSet):
    queryset = notingTemplate.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = notingTemplateSerializer


class userNotificationsViewSet(viewsets.ModelViewSet):
    queryset = userNotifications.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = userNotificationsSerializer


class formIndexViewSet(viewsets.ModelViewSet):
    queryset = formIndex.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = formIndexSerializer

