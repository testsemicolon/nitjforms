# Generated by Django 3.0.5 on 2020-05-05 18:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0014_delete_hellofdf'),
    ]

    operations = [
        migrations.CreateModel(
            name='TAHDAS',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Enter_Your_Age', models.CharField(max_length=100)),
                ('Enter_Your_NAME', models.TextField()),
                ('DATE', models.DateField()),
            ],
        ),
    ]
