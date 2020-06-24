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



class test1(models.Model):
    what_is_your_mother_name = models.CharField(max_length=100)
    what_is_your_father_name = models.CharField(max_length=100)


class test2(models.Model):
    what_is_your_mother_name = models.CharField(max_length=100)


class test3(models.Model):
    what_is_your_mother_name = models.CharField(max_length=100)
    what_is_your_father_name = models.CharField(max_length=100)


class zvczxxcv(models.Model):
    what_is_your_mother_name = models.CharField(max_length=100)
    what_is_your_father_name = models.CharField(max_length=100)


class test4(models.Model):
    what_is_your_mother_name = models.CharField(max_length=100)
    what_is_your_father_name = models.CharField(max_length=100)
    dsd = models.CharField(max_length=100)
    fdafad = models.CharField(max_length=100)






class test8(models.Model):
    what_is_your_mother_name = models.CharField(max_length=100)
    what_is_your_father_name = models.CharField(max_length=100)
    dsd = models.CharField(max_length=100)
    fdafad = models.CharField(max_length=100)
    sasasa = models.CharField(max_length=100)
