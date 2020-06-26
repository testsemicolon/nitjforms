from rest_framework import routers
from .api import *


router = routers.DefaultRouter()

router.register("forms", CreateFormsViewSet, "forms")
urlpatterns = router.urls

router.register("name", FormNameViewSet, "name")
urlpatterns = router.urls

router.register("generic", GeneralFormsViewSet, "generic")
urlpatterns = router.urls



router.register('test103', test103ViewSet, 'test103')
urlpatterns = router.urls


router.register('test104', test104ViewSet, 'test104')
urlpatterns = router.urls


router.register('test105', test105ViewSet, 'test105')
urlpatterns = router.urls
