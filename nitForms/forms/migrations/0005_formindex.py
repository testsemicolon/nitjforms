# Generated by Django 3.0.5 on 2020-08-19 17:38

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0004_usernotifications'),
    ]

    operations = [
        migrations.CreateModel(
            name='formIndex',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('userName', models.CharField(max_length=1000)),
                ('formName', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=1000), blank=True, default=list, size=None)),
            ],
        ),
    ]