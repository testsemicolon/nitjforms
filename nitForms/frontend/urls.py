from django.urls import path
from . import views
from forms import views as views1

app_name = "frontend"

urlpatterns = [
    path('', views.index_views, name='index'),
    path('post/', views1.post_views, name="post"),
]
