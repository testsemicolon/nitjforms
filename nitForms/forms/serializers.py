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


<<<<<<< HEAD
=======
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'
>>>>>>> 20e3314d2758936959c5bc612b320c21c3315459


class test1Serializer(serializers.ModelSerializer):
    class Meta:
        model = test1
        fields = '__all__'


class test1AcceptedSerializer(serializers.ModelSerializer):
    class Meta:
        model = test1Accepted
        fields = '__all__'


class test3Serializer(serializers.ModelSerializer):
    class Meta:
        model = test3
        fields = '__all__'


class test3AcceptedSerializer(serializers.ModelSerializer):
    class Meta:
        model = test3Accepted
        fields = '__all__'


class test2Serializer(serializers.ModelSerializer):
    class Meta:
        model = test2
        fields = '__all__'


class test2AcceptedSerializer(serializers.ModelSerializer):
    class Meta:
        model = test2Accepted
        fields = '__all__'
