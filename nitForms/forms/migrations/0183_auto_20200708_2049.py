# Generated by Django 3.0.5 on 2020-07-08 15:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0182_auto_20200708_2047'),
    ]

    operations = [
        migrations.AlterField(
            model_name='test1',
            name='status',
            field=models.CharField(blank=True, max_length=5),
        ),
    ]