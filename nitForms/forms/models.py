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

    def __str__(self):
        return self.title


class GeneralForms(models.Model):
    formName = models.CharField(max_length=100, blank=False)
    question = models.CharField(max_length=100, blank=False)
    inputType = models.CharField(max_length=50, blank=False)

    def __str__(self):
        return self.formName


<<<<<<< HEAD

class test1(models.Model):
    what_is_your_mother_name = models.CharField(max_length=1000)
    dsd = models.CharField(max_length=1000)


class test1Accepted(models.Model):
    comment = models.CharField(max_length=1000, blank=True)
    what_is_your_mother_name = models.CharField(max_length=1000)
    dsd = models.CharField(max_length=1000)
=======
class Post(models.Model):
    image = models.ImageField(upload_to='post_images')


class test1(models.Model):
    cxzc = models.CharField(max_length=1000)
    csdcd = models.CharField(max_length=1000)
    Enter_Your_Age = models.CharField(max_length=1000)


class test1Accepted(models.Model):
    comment = models.CharField(max_length=1000, blank=True)
    cxzc = models.CharField(max_length=1000)
    csdcd = models.CharField(max_length=1000)
    Enter_Your_Age = models.CharField(max_length=1000)
>>>>>>> 20e3314d2758936959c5bc612b320c21c3315459
