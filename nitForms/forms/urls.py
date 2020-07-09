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


router.register('test2', test2ViewSet, 'test2')
urlpatterns = router.urls


router.register('test2Accepted', test2AcceptedViewSet, 'test2Accepted')
urlpatterns = router.urls
