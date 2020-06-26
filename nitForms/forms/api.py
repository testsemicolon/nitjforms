from rest_framework import viewsets, permissions
from .serializers import *
from .models import *


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

    def get_queryset(self):
        return self.request.user.formName.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class GeneralFormsViewSet(viewsets.ModelViewSet):
    queryset = GeneralForms.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = GeneralFormsSerializer



class test1221ViewSet(viewsets.ModelViewSet):
    queryset = test1221.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = test1221Serializer


class test2112ViewSet(viewsets.ModelViewSet):
    queryset = test2112.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = test2112Serializer


class test1223ViewSet(viewsets.ModelViewSet):
    queryset = test1223.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = test1223Serializer
