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


class test1ViewSet(viewsets.ModelViewSet):
    queryset = test1.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = test1Serializer


class test2ViewSet(viewsets.ModelViewSet):
    queryset = test2.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = test2Serializer


class test3ViewSet(viewsets.ModelViewSet):
    queryset = test3.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = test3Serializer


class zvczxxcvViewSet(viewsets.ModelViewSet):
    queryset = zvczxxcv.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = zvczxxcvSerializer


class test4ViewSet(viewsets.ModelViewSet):
    queryset = test4.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = test4Serializer


class test8ViewSet(viewsets.ModelViewSet):
    queryset = test8.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = test8Serializer
