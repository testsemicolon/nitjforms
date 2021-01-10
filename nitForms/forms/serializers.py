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


class EmailIndexSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailIndex
        fields = '__all__'

class DepartmentDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = DepartmentDetail
        fields = '__all__'


class ChatSystemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatSystem
        fields = '__all__'





class teest5Serializer(serializers.ModelSerializer):
    class Meta:
        model = teest5
        fields = '__all__'


class teest5AcceptedSerializer(serializers.ModelSerializer):
    class Meta:
        model = teest5Accepted
        fields = '__all__'




class chahatSerializer(serializers.ModelSerializer):
    class Meta:
        model = chahat
        fields = '__all__'


class chahatAcceptedSerializer(serializers.ModelSerializer):
    class Meta:
        model = chahatAccepted
        fields = '__all__'


class test4Serializer(serializers.ModelSerializer):
    class Meta:
        model = test4
        fields = '__all__'


class test4AcceptedSerializer(serializers.ModelSerializer):
    class Meta:
        model = test4Accepted
        fields = '__all__'
