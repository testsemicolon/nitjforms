# Generated by Django 2.0.2 on 2020-06-19 11:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0055_sadd'),
    ]

    operations = [
        migrations.CreateModel(
            name='test3',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fdafad', models.CharField(max_length=100)),
                ('what_is_your_mother_name', models.CharField(max_length=100)),
                ('dsds', models.TextField()),
                ('dsdsdsdsdasaw', models.CharField(max_length=100)),
                ('test3', models.CharField(max_length=100)),
            ],
        ),
        migrations.DeleteModel(
            name='sad',
        ),
        migrations.DeleteModel(
            name='sadd',
        ),
    ]
