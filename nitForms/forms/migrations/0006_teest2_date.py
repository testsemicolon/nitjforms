# Generated by Django 3.0.5 on 2020-07-22 13:22

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0005_teest2_teest2accepted'),
    ]

    operations = [
        migrations.AddField(
            model_name='teest2',
            name='date',
            field=models.DateField(default=datetime.datetime(2020, 7, 22, 13, 22, 5, 977378, tzinfo=utc)),
            preserve_default=False,
        ),
    ]
