from rest_framework import routers
from .api import *
from . import api

from django.urls import path

router = routers.DefaultRouter()

router.register("forms", CreateFormsViewSet, "forms")
router.register("name", FormNameViewSet, "name")
router.register("generic", GeneralFormsViewSet, "generic")
router.register("sharedUser", sharedUsersViewSet, "sharedUsers")

urlpatterns = router.urls
urlpatterns += [
    path('posts/', api.PostView.as_view(), name='posts_list'),
]






router.register('test1', test1ViewSet, 'test1')
urlpatterns = router.urls


router.register('test1Accepted', test1AcceptedViewSet, 'test1Accepted')
urlpatterns = router.urls


router.register('Hello1', Hello1ViewSet, 'Hello1')
urlpatterns = router.urls


router.register('Hello1Accepted', Hello1AcceptedViewSet, 'Hello1Accepted')
urlpatterns = router.urls


router.register('sadsa', sadsaViewSet, 'sadsa')
urlpatterns = router.urls


router.register('sadsaAccepted', sadsaAcceptedViewSet, 'sadsaAccepted')
urlpatterns = router.urls
