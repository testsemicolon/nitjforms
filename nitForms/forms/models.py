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


class GeneralForms(models.Model):
    formName = models.CharField(max_length=100, blank=False)
    question = models.CharField(max_length=100, blank=False)
    inputType = models.CharField(max_length=50, blank=False)

    def __str__(self):
        return self.formName






class Hello(models.Model):
    Enter_Your_Age = models.CharField(max_length=1000)
    enter_your_date_of_birth = models.CharField(max_length=1000)


class test103(models.Model):
    what_is_your_mother_name = models.CharField(max_length=1000)
    father = models.CharField(max_length=1000)
    qualification = models.CharField(max_length=1000)


class test105(models.Model):
    hello = models.CharField(max_length=1000)


class test106(models.Model):
    jatin = models.CharField(max_length=1000)


class test107(models.Model):
    what_is_your_mother_name = models.CharField(max_length=1000)
    mother = models.CharField(max_length=1000)
    father_name = models.CharField(max_length=1000)
    fdafad = models.CharField(max_length=1000)


class test108(models.Model):
    what_is_your_mother_name = models.CharField(max_length=1000)
    mother = models.CharField(max_length=1000)
    father_name = models.CharField(max_length=1000)
    fdafad = models.CharField(max_length=1000)
    raghav = models.TextField()


class test109(models.Model):
    mother = models.CharField(max_length=1000)
    father_name = models.CharField(max_length=1000)
    fdafad = models.CharField(max_length=1000)
    raghav = models.TextField()
    what_is_yo = models.CharField(max_length=1000)
