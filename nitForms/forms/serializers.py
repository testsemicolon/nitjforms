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




class test1Serializer(serializers.ModelSerializer):
    class Meta:
        model = test1
        fields = '__all__'


class test2Serializer(serializers.ModelSerializer):
    class Meta:
        model = test2
        fields = '__all__'


class test3Serializer(serializers.ModelSerializer):
    class Meta:
        model = test3
        fields = '__all__'


class zvczxxcvSerializer(serializers.ModelSerializer):
    class Meta:
        model = zvczxxcv
        fields = '__all__'


class test4Serializer(serializers.ModelSerializer):
    class Meta:
        model = test4
        fields = '__all__'




class test8Serializer(serializers.ModelSerializer):
    class Meta:
        model = test8
        fields = '__all__'
