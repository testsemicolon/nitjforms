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






class dsdsViewSet(viewsets.ModelViewSet):
    queryset = dsds.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = dsdsSerializer


class jatinViewSet(viewsets.ModelViewSet):
    queryset = jatin.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = jatinSerializer
