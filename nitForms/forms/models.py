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


class FormName(models.Model):
    title = models.CharField(max_length=100, unique=True)
    description = models.CharField(max_length=100)
    owner = models.ForeignKey(
        User, related_name="formName", on_delete=models.CASCADE, null=True
    )
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class dsds(models.Model):
    fdafad = models.CharField(max_length=100)
    what_is_your_mother_name = models.CharField(max_length=100)
    dsds = models.TextField()
    dsd = models.CharField(max_length=100)


class jatin(models.Model):
    fdafad = models.CharField(max_length=100)
    what_is_your_mother_name = models.CharField(max_length=100)
    dsds = models.TextField()
    dsd = models.CharField(max_length=100)
    what_is_your_mother_name = models.TextField()
