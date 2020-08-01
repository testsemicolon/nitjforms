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


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

class HelloSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hello
        fields = '__all__'


class HelloAcceptedSerializer(serializers.ModelSerializer):
    class Meta:
        model = HelloAccepted
        fields = '__all__'


class test3Serializer(serializers.ModelSerializer):
    class Meta:
        model = test3
        fields = '__all__'


class test3AcceptedSerializer(serializers.ModelSerializer):
    class Meta:
        model = test3Accepted
        fields = '__all__'
