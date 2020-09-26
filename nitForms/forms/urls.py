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
router.register("userNotifications", userNotificationsViewSet, "userNotifications")
router.register("formIndex", formIndexViewSet, "formIndex")
urlpatterns = router.urls
urlpatterns += [
    path('posts/', api.PostView.as_view(), name='posts_list'),
]


<<<<<<< HEAD

router.register('test1', test1ViewSet, 'test1')

=======
>>>>>>> 35757ff2d55dd6c0fa1adf8c1fa6b3ea693a0a86


router.register('test1', test1ViewSet, 'test1')


router.register('test1Accepted', test1AcceptedViewSet, 'test1Accepted')
urlpatterns += router.urls
<<<<<<< HEAD
=======


router.register('payment_form_1', payment_form_1ViewSet, 'payment_form_1')


router.register('payment_form_1Accepted', payment_form_1AcceptedViewSet, 'payment_form_1Accepted')
urlpatterns += router.urls
>>>>>>> 35757ff2d55dd6c0fa1adf8c1fa6b3ea693a0a86
