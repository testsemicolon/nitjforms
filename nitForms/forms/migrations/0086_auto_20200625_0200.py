# Generated by Django 3.0.7 on 2020-06-24 20:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0085_test7'),
    ]

    operations = [
        migrations.CreateModel(
            name='test8',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('what_is_your_mother_name', models.CharField(max_length=100)),
                ('what_is_your_father_name', models.CharField(max_length=100)),
                ('dsd', models.CharField(max_length=100)),
                ('fdafad', models.CharField(max_length=100)),
                ('sasasa', models.CharField(max_length=100)),
            ],
        ),
        migrations.DeleteModel(
            name='test7',
        ),
    ]
