from rest_framework import serializers
from .models import *


class CreateFormsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CreateForms
        fields = "__all__"


class FormNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormName
        fields = "__all__"


class GeneralFormsSerializer(serializers.ModelSerializer):
    class Meta:
        model = GeneralForms
        fields = "__all__"


class test1Serializer(serializers.ModelSerializer):
    class Meta:
        model = test1
        fields = '__all__'
