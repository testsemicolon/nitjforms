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





class test103Serializer(serializers.ModelSerializer):
    class Meta:
        model = test103
        fields = '__all__'


class test104Serializer(serializers.ModelSerializer):
    class Meta:
        model = test104
        fields = '__all__'


class test105Serializer(serializers.ModelSerializer):
    class Meta:
        model = test105
        fields = '__all__'
