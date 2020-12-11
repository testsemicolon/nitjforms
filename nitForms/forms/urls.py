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
router.register("userNotifications", userNotificationsViewSet,
                "userNotifications")
router.register("formIndex", formIndexViewSet, "formIndex")
router.register("EmailIndex", EmailIndexViewSet, "EmailIndex")
urlpatterns = router.urls
urlpatterns += [
    path('posts/', api.PostView.as_view(), name='posts_list'),
]



router.register('test111', test111ViewSet, 'test111')


router.register('test111Accepted', test111AcceptedViewSet, 'test111Accepted')
urlpatterns += router.urls


router.register('test3', test3ViewSet, 'test3')


router.register('test3Accepted', test3AcceptedViewSet, 'test3Accepted')
urlpatterns += router.urls


router.register('test43', test43ViewSet, 'test43')


router.register('test43Accepted', test43AcceptedViewSet, 'test43Accepted')
urlpatterns += router.urls
