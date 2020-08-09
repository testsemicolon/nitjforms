from rest_framework import routers
from .api import *
from . import api

from django.urls import path

router = routers.DefaultRouter()

router.register("forms", CreateFormsViewSet, "forms")
router.register("name", FormNameViewSet, "name")
router.register("generic", GeneralFormsViewSet, "generic")
router.register("sharedUser", sharedUsersViewSet, "sharedUsers")
router.register("notingTemplate", notingTemplateViewSet, "notingTemplate")
urlpatterns = router.urls
urlpatterns += [
    path('posts/', api.PostView.as_view(), name='posts_list'),
]




router.register('test1', test1ViewSet, 'test1')


router.register('test1Accepted', test1AcceptedViewSet, 'test1Accepted')
urlpatterns += router.urls


router.register('test3', test3ViewSet, 'test3')


router.register('test3Accepted', test3AcceptedViewSet, 'test3Accepted')
urlpatterns += router.urls
