from django.db import models
from django.contrib.auth.models import User


class UserPerm(models.Model):
    username = models.CharField(max_length=100, blank=False)

    def __str__(self):
        return self.username


class CreateForms(models.Model):
    question = models.CharField(max_length=100, blank=False)
    inputType = models.CharField(max_length=50, blank=False)
    owner = models.ForeignKey(User,
                              related_name="createForm",
                              on_delete=models.CASCADE,
                              null=True)

    def __str__(self):
        return self.question


class FormName(models.Model):
    title = models.CharField(max_length=100, unique=True)
    description = models.CharField(max_length=100)
    created_by = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class GeneralForms(models.Model):
    formName = models.CharField(max_length=100, blank=False)
    question = models.CharField(max_length=100, blank=False)
    inputType = models.CharField(max_length=50, blank=False)

    def __str__(self):
        return self.formName








class test2(models.Model):
    Enter_Your_Age = models.CharField(max_length=1000)
    cxzc = models.CharField(max_length=1000)
    enter_your_date_of_birth = models.CharField(max_length=1000)


class test2Accepted(models.Model):
    comment = models.CharField(max_length=1000, blank=True)
    Enter_Your_Age = models.CharField(max_length=1000)
    cxzc = models.CharField(max_length=1000)
    enter_your_date_of_birth = models.CharField(max_length=1000)


class Hello(models.Model):
    Enter_Your_Age = models.CharField(max_length=1000)
    cxzc = models.CharField(max_length=1000)


class HelloAccepted(models.Model):
    comment = models.CharField(max_length=1000, blank=True)
    Enter_Your_Age = models.CharField(max_length=1000)
    cxzc = models.CharField(max_length=1000)
