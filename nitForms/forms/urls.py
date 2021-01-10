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
router.register("DepartmentDetail",DepartmentDetailViewSet,"DepartmentDetail")
router.register("ChatSystem",ChatSystemViewSet,"ChatSystem")
urlpatterns = router.urls
urlpatterns += [
    path('posts/', api.PostView.as_view(), name='posts_list'),
]



router.register('teest5', teest5ViewSet, 'teest5')


router.register('teest5Accepted', teest5AcceptedViewSet, 'teest5Accepted')
urlpatterns += router.urls




router.register('chahat', chahatViewSet, 'chahat')


router.register('chahatAccepted', chahatAcceptedViewSet, 'chahatAccepted')
urlpatterns += router.urls


router.register('test4', test4ViewSet, 'test4')


router.register('test4Accepted', test4AcceptedViewSet, 'test4Accepted')
urlpatterns += router.urls
