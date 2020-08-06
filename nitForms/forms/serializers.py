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




class test1Serializer(serializers.ModelSerializer):
    class Meta:
        model = test1
        fields = '__all__'


class test1AcceptedSerializer(serializers.ModelSerializer):
    class Meta:
        model = test1Accepted
        fields = '__all__'


class Hello1Serializer(serializers.ModelSerializer):
    class Meta:
        model = Hello1
        fields = '__all__'


class Hello1AcceptedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hello1Accepted
        fields = '__all__'


class sadsaSerializer(serializers.ModelSerializer):
    class Meta:
        model = sadsa
        fields = '__all__'


class sadsaAcceptedSerializer(serializers.ModelSerializer):
    class Meta:
        model = sadsaAccepted
        fields = '__all__'
