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



class SAFdsePOPMSerializer(serializers.ModelSerializer):
    class Meta:
        model = SAFdsePOPM
        fields = '__all__'
