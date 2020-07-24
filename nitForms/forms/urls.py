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





router.register('sdasdss', sdasdssViewSet, 'sdasdss')
urlpatterns = router.urls


router.register('sdasdssAccepted', sdasdssAcceptedViewSet, 'sdasdssAccepted')
urlpatterns = router.urls


router.register('test4', test4ViewSet, 'test4')
urlpatterns = router.urls


router.register('test4Accepted', test4AcceptedViewSet, 'test4Accepted')
urlpatterns = router.urls
