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


class userNotifications(models.Model):
    sender = models.CharField(max_length=1000)
    reciever = models.CharField(max_length=1000)
    notify = models.CharField(max_length=1000)
    flag = models.BooleanField(default=True)


class formIndex(models.Model):
    userName = models.CharField(max_length=1000)
    formName = ArrayField(models.CharField(max_length=1000),
                          blank=True,
                          default=list)

class EmailIndex(models.Model):
    senderEmail = models.EmailField(max_length=1000)
    recieverEmail = models.EmailField(max_length=1000)
    content = models.CharField(max_length=1000)
    sentDate = models.DateTimeField(auto_now_add=True)


class test1(models.Model):
    responseTime = models.DateTimeField(auto_now_add=True)
    formStatus = models.BooleanField(default=False)
    commentRejected = models.CharField(max_length=1000, blank=True)
    userName = models.CharField(max_length=1000, blank=True)
    Enter_name = models.CharField(max_length=1000)
    Enter_age = models.CharField(max_length=1000)


class test1Accepted(models.Model):
    responseTime = models.DateTimeField(auto_now_add=True)
    comment = JSONField(null=True)
    forwardTo = ArrayField(JSONField(null=True),blank=True, default=list)
    commentAccepted = models.CharField(max_length=1000, blank=True)
    notification = notification = JSONField(null=True)
    userName = models.CharField(max_length=1000, blank=True)
    Enter_name = models.CharField(max_length=1000)
    Enter_age = models.CharField(max_length=1000)


class test2(models.Model):
    responseTime = models.DateTimeField(auto_now_add=True)
    formStatus = models.BooleanField(default=False)
    commentRejected = models.CharField(max_length=1000, blank=True)
    userName = models.CharField(max_length=1000, blank=True)
    userMail = models.EmailField(max_length=1000)
    enter_name = models.CharField(max_length=1000)
    enter_age = models.CharField(max_length=1000)


class test2Accepted(models.Model):
    responseTime = models.DateTimeField(auto_now_add=True)
    comment = JSONField(null=True)
    forwardTo = ArrayField(JSONField(null=True),blank=True, default=list)
    commentAccepted = models.CharField(max_length=1000, blank=True)
    notification = notification = JSONField(null=True)
    userName = models.CharField(max_length=1000, blank=True)
    enter_name = models.CharField(max_length=1000)
    enter_age = models.CharField(max_length=1000)


class test5(models.Model):
    responseTime = models.DateTimeField(auto_now_add=True)
    formStatus = models.BooleanField(default=False)
    commentRejected = models.CharField(max_length=1000, blank=True)
    userName = models.CharField(max_length=1000, blank=True)
    userMail = models.EmailField(max_length=1000)
    Enter_hasad = models.CharField(max_length=1000)
    Enter_asdjb = models.CharField(max_length=1000)


class test5Accepted(models.Model):
    responseTime = models.DateTimeField(auto_now_add=True)
    comment = JSONField(null=True)
    forwardTo = ArrayField(JSONField(null=True),blank=True, default=list)
    commentAccepted = models.CharField(max_length=1000, blank=True)
    notification = notification = JSONField(null=True)
    userName = models.CharField(max_length=1000, blank=True)
    Enter_hasad = models.CharField(max_length=1000)
    Enter_asdjb = models.CharField(max_length=1000)
