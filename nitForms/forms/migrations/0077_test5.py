# Generated by Django 2.0.2 on 2020-06-22 22:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0076_auto_20200623_0358'),
    ]

    operations = [
        migrations.CreateModel(
            name='test5',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('what_is_your_mother_name', models.CharField(max_length=100)),
            ],
        ),
    ]