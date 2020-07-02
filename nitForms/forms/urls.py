from rest_framework import routers
from .api import *

router = routers.DefaultRouter()

router.register("forms", CreateFormsViewSet, "forms")
urlpatterns = router.urls

router.register("name", FormNameViewSet, "name")
urlpatterns = router.urls

router.register("generic", GeneralFormsViewSet, "generic")
urlpatterns = router.urls


router.register('test101', test101ViewSet, 'test101')
urlpatterns = router.urls


router.register('test102', test102ViewSet, 'test102')
urlpatterns = router.urls
