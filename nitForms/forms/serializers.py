from rest_framework import serializers
from . models import *


class CreateFormsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CreateForms
        fields = '__all__'


class FormNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormName
        fields = '__all__'



class cxzCzxSerializer(serializers.ModelSerializer):
    class Meta:
        model = cxzCzx
        fields = '__all__'


class test1Serializer(serializers.ModelSerializer):
    class Meta:
        model = test1
        fields = '__all__'


class jatinSerializer(serializers.ModelSerializer):
    class Meta:
        model = jatin
        fields = '__all__'


class chahahatttSerializer(serializers.ModelSerializer):
    class Meta:
        model = chahahattt
        fields = '__all__'


class asasaSerializer(serializers.ModelSerializer):
    class Meta:
        model = asasa
        fields = '__all__'


class asasaSerializer(serializers.ModelSerializer):
    class Meta:
        model = asasa
        fields = '__all__'
