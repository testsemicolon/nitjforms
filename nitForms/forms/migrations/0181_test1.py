# Generated by Django 3.0.5 on 2020-07-08 15:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0180_delete_test1'),
    ]

    operations = [
        migrations.CreateModel(
            name='test1',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.BooleanField(default=False)),
                ('Enter_Your_Age', models.CharField(max_length=1000)),
                ('acacac', models.CharField(max_length=1000)),
            ],
        ),
    ]
