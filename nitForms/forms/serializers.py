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


class FounderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Founder
        fields = '__all__'


class jobSerializer(serializers.ModelSerializer):
    class Meta:
        model = job
        fields = '__all__'
