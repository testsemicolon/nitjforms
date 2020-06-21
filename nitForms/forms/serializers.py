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



class HelloSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hello
        fields = '__all__'


class SAFePOPMSerializer(serializers.ModelSerializer):
    class Meta:
        model = SAFePOPM
        fields = '__all__'


class dasdasdadSerializer(serializers.ModelSerializer):
    class Meta:
        model = dasdasdad
        fields = '__all__'
