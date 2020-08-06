from rest_framework import routers
from .api import *
from . import api

from django.urls import path

router = routers.DefaultRouter()

router.register("forms", CreateFormsViewSet, "forms")
router.register("name", FormNameViewSet, "name")
router.register("generic", GeneralFormsViewSet, "generic")
<<<<<<< HEAD
urlpatterns = router.urls

router.register("userperm", UserPermViewSet, "userperm")
urlpatterns = router.urls






router.register('test1', test1ViewSet, 'test1')
urlpatterns = router.urls


router.register('test1Accepted', test1AcceptedViewSet, 'test1Accepted')
urlpatterns = router.urls
=======
router.register('test1', test1ViewSet, 'test1')
router.register('test1Accepted', test1AcceptedViewSet, 'test1Accepted')
urlpatterns = router.urls
urlpatterns += [
    path('posts/', api.PostView.as_view(), name='posts_list'),
]
<<<<<<< HEAD


router.register('test3', test3ViewSet, 'test3')
urlpatterns = router.urls


router.register('test3Accepted', test3AcceptedViewSet, 'test3Accepted')
urlpatterns = router.urls


router.register('test2', test2ViewSet, 'test2')
urlpatterns = router.urls


router.register('test2Accepted', test2AcceptedViewSet, 'test2Accepted')
urlpatterns = router.urls
=======
>>>>>>> 20e3314d2758936959c5bc612b320c21c3315459
>>>>>>> cd40bae59dce44b0827021f2a11097b8841dca3b
