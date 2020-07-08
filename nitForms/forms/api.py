from rest_framework import viewsets, permissions
from .serializers import *
from .models import *


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







class test1ViewSet(viewsets.ModelViewSet):
    queryset = test1.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = test1Serializer


class test1AcceptedViewSet(viewsets.ModelViewSet):
    queryset = test1Accepted.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = test1AcceptedSerializer


class test2ViewSet(viewsets.ModelViewSet):
    queryset = test2.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = test2Serializer


class test2AcceptedViewSet(viewsets.ModelViewSet):
    queryset = test2Accepted.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = test2AcceptedSerializer


class test3ViewSet(viewsets.ModelViewSet):
    queryset = test3.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = test3Serializer


class test3AcceptedViewSet(viewsets.ModelViewSet):
    queryset = test3Accepted.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = test3AcceptedSerializer
