from rest_framework import serializers
from .models import *


class UserPermSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPerm
        fields = "__all__"


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





class test102Serializer(serializers.ModelSerializer):
    class Meta:
        model = test102
        fields = '__all__'
