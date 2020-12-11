# Generated by Django 3.0.5 on 2020-12-11 09:47

import django.contrib.postgres.fields
import django.contrib.postgres.fields.jsonb
from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0005_test3_test3accepted'),
    ]

    operations = [
        migrations.CreateModel(
            name='test1',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('responseID', models.UUIDField(default=uuid.uuid4, editable=False)),
                ('responseTime', models.DateTimeField(auto_now_add=True)),
                ('responseStatus', models.BooleanField(default=False)),
                ('userName', models.CharField(blank=True, max_length=1000)),
                ('userMail', models.EmailField(max_length=1000)),
                ('name', models.CharField(max_length=1000)),
                ('age', models.CharField(max_length=1000)),
                ('dob', models.CharField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='test1Accepted',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('acceptedResponseID', models.CharField(max_length=1000)),
                ('responseTime', models.DateTimeField(auto_now_add=True)),
                ('comment', django.contrib.postgres.fields.jsonb.JSONField(null=True)),
                ('forwardTo', django.contrib.postgres.fields.ArrayField(base_field=django.contrib.postgres.fields.jsonb.JSONField(null=True), blank=True, default=list, size=None)),
                ('notification', django.contrib.postgres.fields.jsonb.JSONField(null=True)),
                ('userName', models.CharField(blank=True, max_length=1000)),
                ('name', models.CharField(max_length=1000)),
                ('age', models.CharField(max_length=1000)),
                ('dob', models.CharField(max_length=1000)),
            ],
        ),
        migrations.DeleteModel(
            name='test11',
        ),
        migrations.DeleteModel(
            name='test11Accepted',
        ),
        migrations.DeleteModel(
            name='test3',
        ),
        migrations.DeleteModel(
            name='test3Accepted',
        ),
    ]
