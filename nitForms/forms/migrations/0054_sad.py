# Generated by Django 2.0.2 on 2020-06-18 20:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0053_testdynamic'),
    ]

    operations = [
        migrations.CreateModel(
            name='sad',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fdafad', models.CharField(max_length=100)),
                ('what_is_your_mother_name', models.CharField(max_length=100)),
                ('dsds', models.TextField()),
                ('what_is_your_sdaasdas', models.CharField(max_length=100)),
                ('sadasd', models.TextField()),
                ('asdasdasd', models.CharField(max_length=100)),
            ],
        ),
    ]
