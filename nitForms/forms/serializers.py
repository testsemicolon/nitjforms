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



class dsdsSerializer(serializers.ModelSerializer):
    class Meta:
        model = dsds
        fields = '__all__'


class jatinSerializer(serializers.ModelSerializer):
    class Meta:
        model = jatin
        fields = '__all__'
