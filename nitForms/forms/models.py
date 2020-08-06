from django.db import models
from accounts.models import CustomUser as User
from django.contrib.postgres.fields import ArrayField


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
    activationStatus = models.BooleanField(default=True)

    def __str__(self):
        return self.title


class GeneralForms(models.Model):
    formName = models.CharField(max_length=100, blank=False)
    question = models.CharField(max_length=100, blank=False)
    inputType = models.CharField(max_length=50, blank=False)

    def __str__(self):
        return self.formName




class Post(models.Model):
    image = models.ImageField(upload_to='post_images')

class sharedUsers(models.Model):
    formName = models.CharField(max_length=1000, unique= True)
    userName = ArrayField(models.CharField(max_length=1000))





class test1(models.Model):
    fdasfdasf = models.CharField(max_length=1000)
    enter_your_date_of_birth = models.CharField(max_length=1000)


class test1Accepted(models.Model):
    comment = models.CharField(max_length=1000, blank=True)
    fdasfdasf = models.CharField(max_length=1000)
    enter_your_date_of_birth = models.CharField(max_length=1000)


class Hello1(models.Model):
    Enter_Your_Age = models.CharField(max_length=1000)
    enter_your_date_of_birth = models.CharField(max_length=1000)
    enter_your_date_of_birth = models.CharField(max_length=1000)


class Hello1Accepted(models.Model):
    comment = models.CharField(max_length=1000, blank=True)
    Enter_Your_Age = models.CharField(max_length=1000)
    enter_your_date_of_birth = models.CharField(max_length=1000)
    enter_your_date_of_birth = models.CharField(max_length=1000)


class sadsa(models.Model):
    sd = models.CharField(max_length=1000)
    sad = models.CharField(max_length=1000)


class sadsaAccepted(models.Model):
    comment = models.CharField(max_length=1000, blank=True)
    sd = models.CharField(max_length=1000)
    sad = models.CharField(max_length=1000)
