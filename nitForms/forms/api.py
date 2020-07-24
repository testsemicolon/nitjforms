from rest_framework import viewsets, permissions
from .serializers import *
from .models import *
from rest_framework.parsers import MultiPartParser, FormParser


class UserPermViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserPermSerializer
    queryset = UserPerm.objects.all()


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


class sdasdssViewSet(viewsets.ModelViewSet):
    queryset = sdasdss.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = sdasdssSerializer


class sdasdssAcceptedViewSet(viewsets.ModelViewSet):
    queryset = sdasdssAccepted.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = sdasdssAcceptedSerializer


class test4ViewSet(viewsets.ModelViewSet):
    queryset = test4.objects.all()
    parser_class = (MultiPartParser, FormParser)
    permission_class = [permissions.AllowAny]
    serializer_class = test4Serializer


class test4AcceptedViewSet(viewsets.ModelViewSet):
    queryset = test4Accepted.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = test4AcceptedSerializer
