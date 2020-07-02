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


class test101Serializer(serializers.ModelSerializer):
    class Meta:
        model = test101
        fields = '__all__'


class test102Serializer(serializers.ModelSerializer):
    class Meta:
        model = test102
        fields = '__all__'
