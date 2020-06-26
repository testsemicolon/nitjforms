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



class test103ViewSet(viewsets.ModelViewSet):
    queryset = test103.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = test103Serializer


class test104ViewSet(viewsets.ModelViewSet):
    queryset = test104.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = test104Serializer


class test105ViewSet(viewsets.ModelViewSet):
    queryset = test105.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = test105Serializer
