from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    can_generate_form = models.BooleanField(default=False)
    can_generate_template = models.BooleanField(default=False)
    can_make_noting = models.BooleanField(default=False)
    userTypr = models.CharField(max_length=1000)
