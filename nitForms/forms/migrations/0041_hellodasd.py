# Generated by Django 3.0.5 on 2020-06-13 05:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0040_delete_helloadssada'),
    ]

    operations = [
        migrations.CreateModel(
            name='Hellodasd',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Enter_Your_Age', models.CharField(max_length=100)),
            ],
        ),
    ]