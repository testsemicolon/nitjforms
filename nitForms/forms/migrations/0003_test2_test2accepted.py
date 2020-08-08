# Generated by Django 3.0.7 on 2020-08-08 14:35

import django.contrib.postgres.fields.jsonb
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0002_test1_test1accepted'),
    ]

    operations = [
        migrations.CreateModel(
            name='test2',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('what_is_your_name', models.CharField(max_length=1000)),
                ('sasasa', models.CharField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='test2Accepted',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment', django.contrib.postgres.fields.jsonb.JSONField(null=True)),
                ('what_is_your_name', models.CharField(max_length=1000)),
                ('sasasa', models.CharField(max_length=1000)),
            ],
        ),
    ]
