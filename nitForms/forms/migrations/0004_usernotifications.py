# Generated by Django 3.0.5 on 2020-08-19 06:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0003_test2_test2accepted'),
    ]

    operations = [
        migrations.CreateModel(
            name='userNotifications',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sender', models.CharField(max_length=1000)),
                ('reciever', models.CharField(max_length=1000)),
                ('notify', models.CharField(max_length=1000)),
                ('flag', models.BooleanField(default=True)),
            ],
        ),
    ]