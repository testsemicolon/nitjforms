from django.db import models


class CreateForms(models.Model):
    question = models.CharField(max_length=100, blank=False)
    inputType = models.CharField(max_length=50, blank=False)
   

    def __str__(self):
        return self.question


class FormName(models.Model):
    title = models.CharField(max_length=100, unique=True)
    description = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Founder(models.Model):
    Enter_Your_Age = models.CharField(max_length=100)
    acacac = models.CharField(max_length=100)


class job(models.Model):
    fdafad = models.CharField(max_length=100)
