# Generated by Django 3.0.5 on 2020-06-12 15:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0032_auto_20200612_1651'),
    ]

    operations = [
        migrations.CreateModel(
            name='Hello',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Enter_Your_Age', models.CharField(max_length=100)),
                ('adsasd', models.CharField(max_length=100)),
            ],
        ),
    ]