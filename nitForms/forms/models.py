from django.db import models
from accounts.models import CustomUser as User
from django.contrib.postgres.fields import ArrayField, JSONField
import uuid


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
    notingLink = ArrayField(models.CharField(max_length=1000),
                            blank=True,
                            default=list)

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
    formName = models.CharField(max_length=1000, unique=True)
    userName = ArrayField(models.CharField(max_length=1000))


class notingTemplate(models.Model):
    key = models.UUIDField(default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=1000)
    noting = JSONField()



class test12(models.Model):
    responseTime = models.DateTimeField(auto_now_add=True)
    formStatus = models.BooleanField(default=False)
    commentRejected = models.CharField(max_length=1000, blank=True)
    userName = models.CharField(max_length=1000, blank=True)
    NAME = models.CharField(max_length=1000)
    AGE = models.CharField(max_length=1000)


class test12Accepted(models.Model):
    responseTime = models.DateTimeField(auto_now_add=True)
    comment = JSONField(null=True)
    forwardTo = ArrayField(JSONField(null=True),blank=True, default=list)
    commentAccepted = models.CharField(max_length=1000, blank=True)
    NAME = models.CharField(max_length=1000)
    AGE = models.CharField(max_length=1000)


class test3(models.Model):
    responseTime = models.DateTimeField(auto_now_add=True)
    formStatus = models.BooleanField(default=False)
    commentRejected = models.CharField(max_length=1000, blank=True)
    userName = models.CharField(max_length=1000, blank=True)
    NAME = models.CharField(max_length=1000)
    AGE = models.CharField(max_length=1000)


class test3Accepted(models.Model):
    responseTime = models.DateTimeField(auto_now_add=True)
    comment = JSONField(null=True)
    forwardTo = ArrayField(JSONField(null=True),blank=True, default=list)
    commentAccepted = models.CharField(max_length=1000, blank=True)
    notification = ArrayField(models.CharField(max_length=1000),blank=True, default=list)
    NAME = models.CharField(max_length=1000)
    AGE = models.CharField(max_length=1000)


class test4(models.Model):
    responseTime = models.DateTimeField(auto_now_add=True)
    formStatus = models.BooleanField(default=False)
    commentRejected = models.CharField(max_length=1000, blank=True)
    userName = models.CharField(max_length=1000, blank=True)
    NAME = models.CharField(max_length=1000)
    AGE = models.CharField(max_length=1000)


class test4Accepted(models.Model):
    responseTime = models.DateTimeField(auto_now_add=True)
    comment = JSONField(null=True)
    forwardTo = ArrayField(JSONField(null=True),blank=True, default=list)
    commentAccepted = models.CharField(max_length=1000, blank=True)
    notification = ArrayField(models.CharField(max_length=1000),blank=True, default=list)
    NAME = models.CharField(max_length=1000)
    AGE = models.CharField(max_length=1000)
