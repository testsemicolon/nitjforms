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
    queryset = FormName.objects.all()


class GeneralFormsViewSet(viewsets.ModelViewSet):
    queryset = GeneralForms.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = GeneralFormsSerializer


class test1ViewSet(viewsets.ModelViewSet):
    queryset = test1.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = test1Serializer
