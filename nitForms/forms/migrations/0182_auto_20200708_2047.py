# Generated by Django 3.0.5 on 2020-07-08 15:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0181_test1'),
    ]

    operations = [
        migrations.AlterField(
            model_name='test1',
            name='status',
            field=models.CharField(default='False', max_length=5),
        ),
    ]