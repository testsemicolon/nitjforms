# Generated by Django 3.0.5 on 2020-06-29 15:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0117_test103'),
    ]

    operations = [
        migrations.CreateModel(
            name='test105',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hello', models.CharField(max_length=1000)),
            ],
        ),
    ]
