# Generated by Django 3.0.5 on 2020-11-14 02:35

import django.contrib.postgres.fields
import django.contrib.postgres.fields.jsonb
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0035_test22_test22accepted'),
    ]

    operations = [
        migrations.CreateModel(
            name='test23',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('responseTime', models.DateTimeField(auto_now_add=True)),
                ('formStatus', models.BooleanField(default=False)),
                ('commentRejected', models.CharField(blank=True, max_length=1000)),
                ('userName', models.CharField(blank=True, max_length=1000)),
                ('userMail', models.EmailField(max_length=1000)),
                ('asdf', models.CharField(max_length=1000)),
                ('vzc', models.CharField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='test23Accepted',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('responseTime', models.DateTimeField(auto_now_add=True)),
                ('comment', django.contrib.postgres.fields.jsonb.JSONField(null=True)),
                ('forwardTo', django.contrib.postgres.fields.ArrayField(base_field=django.contrib.postgres.fields.jsonb.JSONField(null=True), blank=True, default=list, size=None)),
                ('commentAccepted', models.CharField(blank=True, max_length=1000)),
                ('notification', django.contrib.postgres.fields.jsonb.JSONField(null=True)),
                ('userName', models.CharField(blank=True, max_length=1000)),
                ('asdf', models.CharField(max_length=1000)),
                ('vzc', models.CharField(max_length=1000)),
            ],
        ),
    ]
