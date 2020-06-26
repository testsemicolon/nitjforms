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




class test1221Serializer(serializers.ModelSerializer):
    class Meta:
        model = test1221
        fields = '__all__'


class test2112Serializer(serializers.ModelSerializer):
    class Meta:
        model = test2112
        fields = '__all__'


class test1223Serializer(serializers.ModelSerializer):
    class Meta:
        model = test1223
        fields = '__all__'
