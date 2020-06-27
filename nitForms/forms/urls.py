from rest_framework import routers
from .api import *


router = routers.DefaultRouter()

router.register("forms", CreateFormsViewSet, "forms")
urlpatterns = router.urls

router.register("name", FormNameViewSet, "name")
urlpatterns = router.urls

router.register("generic", GeneralFormsViewSet, "generic")
urlpatterns = router.urls


router.register('test104', test104ViewSet, 'test104')
urlpatterns = router.urls


router.register('test1022', test1022ViewSet, 'test1022')
urlpatterns = router.urls
