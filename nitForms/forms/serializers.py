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
