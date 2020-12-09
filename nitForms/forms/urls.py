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


router.register('test1', test1ViewSet, 'test1')


router.register('test1Accepted', test1AcceptedViewSet, 'test1Accepted')
urlpatterns += router.urls
