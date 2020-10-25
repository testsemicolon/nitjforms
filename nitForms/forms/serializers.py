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


class userNotificationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = userNotifications
        fields = '__all__'


class notingTemplateSerializer(serializers.ModelSerializer):
    class Meta:
        model = notingTemplate
        fields = '__all__'


class formIndexSerializer(serializers.ModelSerializer):
    class Meta:
        model = formIndex
        fields = '__all__'


class test101Serializer(serializers.ModelSerializer):
    class Meta:
        model = test101
        fields = '__all__'


class test101AcceptedSerializer(serializers.ModelSerializer):
    class Meta:
        model = test101Accepted
        fields = '__all__'
