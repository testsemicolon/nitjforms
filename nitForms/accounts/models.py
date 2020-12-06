from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    can_generate_form = models.BooleanField(default=False)
    can_generate_template = models.BooleanField(default=False)
    can_make_noting = models.BooleanField(default=False)
    userType = models.CharField(max_length=1000)
    department = models.CharField(max_length=1000, null=False)
    instituteName = models.CharField(max_length=1000)
