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




router.register('test12', test12ViewSet, 'test12')


router.register('test12Accepted', test12AcceptedViewSet, 'test12Accepted')
urlpatterns += router.urls


router.register('test3', test3ViewSet, 'test3')


router.register('test3Accepted', test3AcceptedViewSet, 'test3Accepted')
urlpatterns += router.urls


router.register('test4', test4ViewSet, 'test4')


router.register('test4Accepted', test4AcceptedViewSet, 'test4Accepted')
urlpatterns += router.urls
