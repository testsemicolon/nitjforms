<<<<<<< HEAD:nitForms/forms/migrations/0002_test1_test1accepted.py
# Generated by Django 3.0.5 on 2020-07-30 15:48
=======
# Generated by Django 3.0.5 on 2020-08-02 15:52
>>>>>>> 20e3314d2758936959c5bc612b320c21c3315459:nitForms/forms/migrations/0009_test4_test4accepted.py

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='test1',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
<<<<<<< HEAD:nitForms/forms/migrations/0002_test1_test1accepted.py
                ('what_is_your_mother_name', models.CharField(max_length=1000)),
                ('dsd', models.CharField(max_length=1000)),
=======
                ('cxzc', models.CharField(max_length=1000)),
                ('enter_your_date_of_birth', models.CharField(max_length=1000)),
                ('acacac', models.CharField(max_length=1000)),
>>>>>>> 20e3314d2758936959c5bc612b320c21c3315459:nitForms/forms/migrations/0009_test4_test4accepted.py
            ],
        ),
        migrations.CreateModel(
            name='test1Accepted',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment', models.CharField(blank=True, max_length=1000)),
<<<<<<< HEAD:nitForms/forms/migrations/0002_test1_test1accepted.py
                ('what_is_your_mother_name', models.CharField(max_length=1000)),
                ('dsd', models.CharField(max_length=1000)),
=======
                ('cxzc', models.CharField(max_length=1000)),
                ('enter_your_date_of_birth', models.CharField(max_length=1000)),
                ('acacac', models.CharField(max_length=1000)),
>>>>>>> 20e3314d2758936959c5bc612b320c21c3315459:nitForms/forms/migrations/0009_test4_test4accepted.py
            ],
        ),
    ]
