from rest_framework import viewsets, permissions
from . serializers import *
from . models import *


class CreateFormsViewSet(viewsets.ModelViewSet):
    permission_class = [
        permissions.IsAuthenticated
    ]
    serializer_class = CreateFormsSerializer

    def get_queryset(self):
        return self.request.user.createForm.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class FormNameViewSet(viewsets.ModelViewSet):
    permission_class = [
        permissions.IsAuthenticated
    ]
    serializer_class = FormNameSerializer

    def get_queryset(self):
        return self.request.user.formName.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)



class cxzCzxViewSet(viewsets.ModelViewSet):
    queryset = cxzCzx.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = cxzCzxSerializer


class test1ViewSet(viewsets.ModelViewSet):
    queryset = test1.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = test1Serializer


class jatinViewSet(viewsets.ModelViewSet):
    queryset = jatin.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = jatinSerializer


class chahahatttViewSet(viewsets.ModelViewSet):
    queryset = chahahattt.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = chahahatttSerializer


class asasaViewSet(viewsets.ModelViewSet):
    queryset = asasa.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = asasaSerializer


class asasaViewSet(viewsets.ModelViewSet):
    queryset = asasa.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = asasaSerializer
