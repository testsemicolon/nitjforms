# Generated by Django 3.0.5 on 2020-07-08 15:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0186_auto_20200708_2058'),
    ]

    operations = [
        migrations.CreateModel(
            name='test1',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('acacac', models.CharField(max_length=1000)),
                ('enter_your_date_of_birth', models.CharField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='test1Accepted',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('acacac', models.CharField(max_length=1000)),
                ('enter_your_date_of_birth', models.CharField(max_length=1000)),
            ],
        ),
    ]
