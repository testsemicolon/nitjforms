# Generated by Django 3.0.7 on 2021-01-07 17:25

from django.conf import settings
import django.contrib.postgres.fields
import django.contrib.postgres.fields.jsonb
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='ChatSystem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('chatRoom', django.contrib.postgres.fields.ArrayField(base_field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=10000), blank=True, default=list, size=None), blank=True, default=list, size=None)),
                ('formName', models.CharField(max_length=1000)),
                ('acceptedResponseID', models.CharField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='DepartmentDetail',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('deptName', models.CharField(max_length=1000)),
                ('committedAmount', models.PositiveIntegerField()),
                ('recommendedAmount', models.PositiveIntegerField()),
                ('pipelinedAmount', models.PositiveIntegerField()),
                ('availableAmount', models.PositiveIntegerField()),
                ('expenditureAmount', models.PositiveIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='EmailIndex',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('senderEmail', models.EmailField(max_length=1000)),
                ('recieverEmail', models.EmailField(max_length=1000)),
                ('content', models.CharField(max_length=1000)),
                ('sentDate', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='formIndex',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('responseID', models.CharField(max_length=1000)),
                ('userName', models.CharField(max_length=1000)),
                ('formName', models.CharField(max_length=1000)),
                ('commentByAuthor', models.CharField(blank=True, max_length=10000)),
                ('responseAcceptedStatus', models.CharField(blank=True, max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='FormName',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, unique=True)),
                ('description', models.CharField(max_length=100)),
                ('created_by', models.CharField(max_length=100)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('department', models.CharField(max_length=1000)),
                ('activationStatus', models.BooleanField(default=True)),
                ('notingLink', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=1000), blank=True, default=list, size=None)),
                ('linkedForms', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=1000), blank=True, default=list, size=None)),
            ],
        ),
        migrations.CreateModel(
            name='GeneralForms',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('formName', models.CharField(max_length=100)),
                ('question', models.CharField(max_length=100)),
                ('inputType', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='notingTemplate',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('key', models.UUIDField(default=uuid.uuid4, editable=False)),
                ('name', models.CharField(max_length=1000)),
                ('noting', django.contrib.postgres.fields.jsonb.JSONField()),
            ],
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='post_images')),
            ],
        ),
        migrations.CreateModel(
            name='sharedUsers',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('formName', models.CharField(max_length=1000, unique=True)),
                ('userName', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=1000), size=None)),
            ],
        ),
        migrations.CreateModel(
            name='userNotifications',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('acceptedResponseID', models.CharField(max_length=1000)),
                ('sender', models.CharField(max_length=1000)),
                ('reciever', models.CharField(max_length=1000)),
                ('notify', models.CharField(max_length=1000)),
                ('linkToPage', models.CharField(blank=True, max_length=1000)),
                ('formName', models.CharField(max_length=1000)),
                ('flag', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='CreateForms',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.CharField(max_length=100)),
                ('inputType', models.CharField(max_length=50)),
                ('owner', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='createForm', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
