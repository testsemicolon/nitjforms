# Generated by Django 3.0.5 on 2020-07-01 00:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0135_test2'),
    ]

    operations = [
        migrations.CreateModel(
            name='test3',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('what_is_your_mother_name', models.CharField(max_length=1000)),
                ('dsd', models.CharField(max_length=1000)),
                ('sister_name', models.CharField(max_length=1000)),
            ],
        ),
    ]