# Generated by Django 3.0.5 on 2020-08-02 16:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0012_test1_test1accepted'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='test1',
            name='sharedUsers',
        ),
    ]
