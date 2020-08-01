from rest_framework import routers
from .api import *
from . import api

from django.urls import path

router = routers.DefaultRouter()

router.register("forms", CreateFormsViewSet, "forms")
router.register("name", FormNameViewSet, "name")
router.register("generic", GeneralFormsViewSet, "generic")
router.register('Hello', HelloViewSet, 'Hello')
router.register('HelloAccepted', HelloAcceptedViewSet, 'HelloAccepted')
router.register('test3Accepted', test3AcceptedViewSet, 'test3Accepted')
urlpatterns = router.urls

urlpatterns += [
    path('posts/', api.PostView.as_view(), name='posts_list'),
]

urlpatterns += [
    path('test3/', api.test3ViewSet.as_view(), name='test3'),
]
