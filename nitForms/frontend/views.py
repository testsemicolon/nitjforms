from django.shortcuts import render
from forms.models import CreateForms


def index_views(request):

    return render(request, 'frontend/index.html')
