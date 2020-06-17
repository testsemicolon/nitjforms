from django.db import models
from django.contrib.auth.models import User


class CreateForms(models.Model):
    question = models.CharField(max_length=100, blank=False)
    inputType = models.CharField(max_length=50, blank=False)
    owner = models.ForeignKey(
        User, related_name="createForm", on_delete=models.CASCADE, null=True
    )

    def __str__(self):
        return self.question



