#! /usr/bin/bash
gnome-terminal -- pwd; cd; source django3/bin/activate; cd /home/ubuntu/Documents/nitjforms/nitjforms/nitForms; python manage.py makemigrations; python manage.py migrate


