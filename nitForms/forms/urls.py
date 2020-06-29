from rest_framework import routers
from .api import *

router = routers.DefaultRouter()

router.register("forms", CreateFormsViewSet, "forms")
urlpatterns = router.urls

router.register("name", FormNameViewSet, "name")
urlpatterns = router.urls

router.register("generic", GeneralFormsViewSet, "generic")
urlpatterns = router.urls



router.register('Hello', HelloViewSet, 'Hello')
urlpatterns = router.urls


router.register('test103', test103ViewSet, 'test103')
urlpatterns = router.urls


router.register('test105', test105ViewSet, 'test105')
urlpatterns = router.urls


router.register('test106', test106ViewSet, 'test106')
urlpatterns = router.urls


router.register('test107', test107ViewSet, 'test107')
urlpatterns = router.urls


router.register('test108', test108ViewSet, 'test108')
urlpatterns = router.urls


router.register('test109', test109ViewSet, 'test109')
urlpatterns = router.urls
