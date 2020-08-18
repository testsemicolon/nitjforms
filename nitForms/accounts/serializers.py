from rest_framework import serializers
# from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from .models import CustomUser as User
# User Serializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "email", "can_generate_form",
                  "can_generate_template", "can_make_noting","userType")


# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "email", "password", "can_generate_form",
                  "can_generate_template", "can_make_noting", "userType")
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data["username"],
            validated_data["email"],
            validated_data["password"],
            can_make_noting=validated_data["can_make_noting"],
            can_generate_template=validated_data["can_generate_template"],
            can_generate_form=validated_data["can_generate_form"],
            userType=validated_data["userType"])
        return user


# Login Serializer
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")
