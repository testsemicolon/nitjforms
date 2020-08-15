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


class test1(models.Model):
    what_is_your_name = models.CharField(max_length=1000)
    sasasa = models.CharField(max_length=1000)


class test1Accepted(models.Model):
    comment = JSONField(null=True)
    forwardTo = ArrayField(models.CharField(
        max_length=100), blank=True, default=list)
    what_is_your_name = models.CharField(max_length=1000)
    sasasa = models.CharField(max_length=1000)


class paymentform1(models.Model):
    fields = models.CharField(max_length=1000)
    sasa = models.CharField(max_length=1000)


class paymentform1Accepted(models.Model):
    comment = JSONField(null=True)
    forwardTo = ArrayField(models.CharField(
        max_length=100), blank=True, default=list)
    fields = models.CharField(max_length=1000)
    sasa = models.CharField(max_length=1000)


class test2(models.Model):
    sasa = models.CharField(max_length=1000)


class test2Accepted(models.Model):
    comment = JSONField(null=True)
    forwardTo = ArrayField(JSONField(null=True), blank=True, default=list)
    sasa = models.CharField(max_length=1000)


class test3(models.Model):
    what_is_your_name = models.CharField(max_length=1000)


class test3Accepted(models.Model):
    comment = JSONField(null=True)
    forwardTo = ArrayField(JSONField(null=True),blank=True, default=list)
    what_is_your_name = models.CharField(max_length=1000)
