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



class HelloViewSet(viewsets.ModelViewSet):
    queryset = Hello.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = HelloSerializer


class SAFePOPMViewSet(viewsets.ModelViewSet):
    queryset = SAFePOPM.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = SAFePOPMSerializer


class dasdasdadViewSet(viewsets.ModelViewSet):
    queryset = dasdasdad.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = dasdasdadSerializer
