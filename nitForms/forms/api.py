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




class HelloViewSet(viewsets.ModelViewSet):
    queryset = Hello.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = HelloSerializer


class test103ViewSet(viewsets.ModelViewSet):
    queryset = test103.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = test103Serializer


class test105ViewSet(viewsets.ModelViewSet):
    queryset = test105.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = test105Serializer


class test106ViewSet(viewsets.ModelViewSet):
    queryset = test106.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = test106Serializer


class test107ViewSet(viewsets.ModelViewSet):
    queryset = test107.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = test107Serializer


class test108ViewSet(viewsets.ModelViewSet):
    queryset = test108.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = test108Serializer


class test109ViewSet(viewsets.ModelViewSet):
    queryset = test109.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = test109Serializer
