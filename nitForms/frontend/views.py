from django.shortcuts import render


def index_views(request):

    return render(request, 'frontend/index.html')
