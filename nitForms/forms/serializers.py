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


class sharedUsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = sharedUsers
        fields = '__all__'


class notingTemplateSerializer(serializers.ModelSerializer):
    class Meta:
        model = notingTemplate
        fields = '__all__'



class test12Serializer(serializers.ModelSerializer):
    class Meta:
        model = test12
        fields = '__all__'


class test12AcceptedSerializer(serializers.ModelSerializer):
    class Meta:
        model = test12Accepted
        fields = '__all__'


class test3Serializer(serializers.ModelSerializer):
    class Meta:
        model = test3
        fields = '__all__'


class test3AcceptedSerializer(serializers.ModelSerializer):
    class Meta:
        model = test3Accepted
        fields = '__all__'


class test4Serializer(serializers.ModelSerializer):
    class Meta:
        model = test4
        fields = '__all__'


class test4AcceptedSerializer(serializers.ModelSerializer):
    class Meta:
        model = test4Accepted
        fields = '__all__'
