# Generated by Django 3.0.5 on 2020-05-05 15:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0010_sdsad'),
    ]

    operations = [
        migrations.CreateModel(
            name='Hellosdasdfsd',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Enter_Your_Age', models.TextField()),
            ],
        ),
        migrations.DeleteModel(
            name='sdsad',
        ),
    ]
