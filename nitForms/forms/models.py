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
    department = models.CharField(max_length=1000)
    activationStatus = models.BooleanField(default=True)
    notingLink = ArrayField(models.CharField(max_length=1000),
                            blank=True,
                            default=list)
    linkedForms = ArrayField(models.CharField(max_length=1000), blank=True, default=list)
    
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
    linkToPage = models.CharField(max_length=1000, blank=True)
    flag = models.BooleanField(default=True)


class formIndex(models.Model):
    responseID = models.CharField(max_length=1000)
    userName = models.CharField(max_length=1000)
    formName = models.CharField(max_length=1000)
    commentByAuthor = models.CharField(max_length = 10000, blank=True)
    responseAcceptedStatus = models.CharField(max_length=1000, blank=True) #response is either rejected or accepted
    


class EmailIndex(models.Model):
    senderEmail = models.EmailField(max_length=1000)
    recieverEmail = models.EmailField(max_length=1000)
    content = models.CharField(max_length=1000)
    sentDate = models.DateTimeField(auto_now_add=True)

class DepartmentDetail(models.Model):
    deptname = models.CharField(max_length=1000)
    committedamount = models.PositiveIntegerField()  
    recommendedamount = models.PositiveIntegerField()
    pipelinedamount = models.PositiveIntegerField()
    availableamount = models.PositiveIntegerField()    
    expenditureamount = models.PositiveIntegerField()
    

class test1(models.Model):
    responseID = models.UUIDField(default=uuid.uuid4, editable=False)
    responseTime = models.DateTimeField(auto_now_add=True)
    responseStatus = models.BooleanField(default=False)
    userName = models.CharField(max_length=1000, blank=True)
    userMail = models.EmailField(max_length=1000)
    sister_name = models.CharField(max_length=1000)
    your_name = models.CharField(max_length=1000)


class test1Accepted(models.Model):
    acceptedResponseID = models.CharField(max_length=1000)
    responseTime = models.DateTimeField(auto_now_add=True)
    comment = JSONField(null=True)
    forwardTo = ArrayField(JSONField(null=True),blank=True, default=list)
    commentByAuthor = models.CharField(max_length = 10000, blank=True)
    notification = JSONField(null=True)
    userName = models.CharField(max_length=1000, blank=True)
    sister_name = models.CharField(max_length=1000)
    your_name = models.CharField(max_length=1000)


class test2(models.Model):
    responseID = models.UUIDField(default=uuid.uuid4, editable=False)
    responseTime = models.DateTimeField(auto_now_add=True)
    responseStatus = models.BooleanField(default=False)
    userName = models.CharField(max_length=1000, blank=True)
    userMail = models.EmailField(max_length=1000)
    sister_name = models.CharField(max_length=1000)
    your_name = models.TextField()
    what_is_your_mother_name = models.CharField(max_length=1000)


class test2Accepted(models.Model):
    acceptedResponseID = models.CharField(max_length=1000)
    responseTime = models.DateTimeField(auto_now_add=True)
    comment = JSONField(null=True)
    forwardTo = ArrayField(JSONField(null=True),blank=True, default=list)
    commentByAuthor = models.CharField(max_length = 10000, blank=True)
    notification = JSONField(null=True)
    userName = models.CharField(max_length=1000, blank=True)
    sister_name = models.CharField(max_length=1000)
    your_name = models.TextField()
    what_is_your_mother_name = models.CharField(max_length=1000)


class purchase_form(models.Model):
    responseID = models.UUIDField(default=uuid.uuid4, editable=False)
    responseTime = models.DateTimeField(auto_now_add=True)
    responseStatus = models.BooleanField(default=False)
    userName = models.CharField(max_length=1000, blank=True)
    userMail = models.EmailField(max_length=1000)
    sister_name = models.CharField(max_length=1000)
    userDept = models.CharField(max_length=1000,blank=True)


class purchase_formAccepted(models.Model):
    acceptedResponseID = models.CharField(max_length=1000)
    responseTime = models.DateTimeField(auto_now_add=True)
    comment = JSONField(null=True)
    forwardTo = ArrayField(JSONField(null=True),blank=True, default=list)
    commentByAuthor = models.CharField(max_length = 10000, blank=True)
    notification = JSONField(null=True)
    userName = models.CharField(max_length=1000, blank=True)
    sister_name = models.CharField(max_length=1000)
    userDept = models.CharField(max_length=1000,blank=True )

class test3(models.Model):
    responseID = models.UUIDField(default=uuid.uuid4, editable=False)
    responseTime = models.DateTimeField(auto_now_add=True)
    responseStatus = models.BooleanField(default=False)
    userName = models.CharField(max_length=1000, blank=True)
    userMail = models.EmailField(max_length=1000)
    userDept = models.CharField(max_length=1000)
    your_name = models.CharField(max_length=1000)
    what_is_your_mother_name = models.CharField(max_length=1000)


class test3Accepted(models.Model):
    acceptedResponseID = models.CharField(max_length=1000)
    responseTime = models.DateTimeField(auto_now_add=True)
    comment = JSONField(null=True)
    forwardTo = ArrayField(JSONField(null=True),blank=True, default=list)
    commentByAuthor = models.CharField(max_length = 10000, blank=True)
    notification = JSONField(null=True)
    userName = models.CharField(max_length=1000, blank=True)
    userDept = models.CharField(max_length=1000)
    your_name = models.CharField(max_length=1000)
    what_is_your_mother_name = models.CharField(max_length=1000)
