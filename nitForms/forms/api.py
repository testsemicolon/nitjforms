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


class HelloViewSet(viewsets.ModelViewSet):
    queryset = Hello.objects.all()
    parser_class = (MultiPartParser, FormParser)
    permission_class = [permissions.AllowAny]
    serializer_class = HelloSerializer


class HelloAcceptedViewSet(viewsets.ModelViewSet):
    queryset = HelloAccepted.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = HelloAcceptedSerializer


class test3ViewSet(viewsets.ModelViewSet):
    queryset = test3.objects.all()
    parser_class = (MultiPartParser, FormParser)
    permission_class = [permissions.AllowAny]
    serializer_class = test3Serializer


class test3ViewSet(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        Test3 = test3.objects.all()
        serializer = test3Serializer(Test3, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        test3_serializer = test3Serializer(data=request.data)
        if test3_serializer.is_valid():
            test3_serializer.save()
            return Response(test3_serializer.data,
                            status=status.HTTP_201_CREATED)
        else:
            print('error', test3_serializer.errors)
            return Response(test3_serializer.errors,
                            status=status.HTTP_400_BAD_REQUEST)


class test3AcceptedViewSet(viewsets.ModelViewSet):
    queryset = test3Accepted.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = test3AcceptedSerializer
