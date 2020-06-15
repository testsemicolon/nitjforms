from rest_framework import viewsets, permissions
from . serializers import *
from . models import *


class CreateFormsViewSet(viewsets.ModelViewSet):
    queryset = CreateForms.objects.all()
    permission_class = [
        permissions.AllowAny
    ]
    serializer_class = CreateFormsSerializer


class FormNameViewSet(viewsets.ModelViewSet):
    queryset = FormName.objects.all()
    permission_class = [
        permissions.AllowAny
    ]
    serializer_class = FormNameSerializer


class FounderViewSet(viewsets.ModelViewSet):
    queryset = Founder.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = FounderSerializer


class jobViewSet(viewsets.ModelViewSet):
    queryset = job.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = jobSerializer
