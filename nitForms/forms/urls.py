from rest_framework import routers
from .api import *

router = routers.DefaultRouter()

router.register("forms", CreateFormsViewSet, "forms")
urlpatterns = router.urls

router.register("name", FormNameViewSet, "name")
urlpatterns = router.urls

router.register("generic", GeneralFormsViewSet, "generic")
urlpatterns = router.urls

router.register("userperm", UserPermViewSet, "userperm")
urlpatterns = router.urls






router.register('test1', test1ViewSet, 'test1')
urlpatterns = router.urls


router.register('test1Accepted', test1AcceptedViewSet, 'test1Accepted')
urlpatterns = router.urls


router.register('test2', test2ViewSet, 'test2')
urlpatterns = router.urls


router.register('test2Accepted', test2AcceptedViewSet, 'test2Accepted')
urlpatterns = router.urls


router.register('test3', test3ViewSet, 'test3')
urlpatterns = router.urls


router.register('test3Accepted', test3AcceptedViewSet, 'test3Accepted')
urlpatterns = router.urls


router.register('test4', test4ViewSet, 'test4')
urlpatterns = router.urls


router.register('test4Accepted', test4AcceptedViewSet, 'test4Accepted')
urlpatterns = router.urls
