from rest_framework import routers
from .api import *


router = routers.DefaultRouter()

router.register("forms", CreateFormsViewSet, "forms")
urlpatterns = router.urls

router.register("name", FormNameViewSet, "name")
urlpatterns = router.urls


router.register('test1', test1ViewSet, 'test1')
urlpatterns = router.urls


router.register('test2', test2ViewSet, 'test2')
urlpatterns = router.urls


router.register('test3', test3ViewSet, 'test3')
urlpatterns = router.urls


router.register('zvczxxcv', zvczxxcvViewSet, 'zvczxxcv')
urlpatterns = router.urls


router.register('test4', test4ViewSet, 'test4')
urlpatterns = router.urls


router.register('test8', test8ViewSet, 'test8')
urlpatterns = router.urls
