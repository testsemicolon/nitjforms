from rest_framework import routers
from .api import *


router = routers.DefaultRouter()

router.register("forms", CreateFormsViewSet, "forms")
urlpatterns = router.urls

router.register("name", FormNameViewSet, "name")
urlpatterns = router.urls

router.register("generic", GeneralFormsViewSet, "generic")
urlpatterns = router.urls



router.register('test1221', test1221ViewSet, 'test1221')
urlpatterns = router.urls


router.register('test2112', test2112ViewSet, 'test2112')
urlpatterns = router.urls


router.register('test1223', test1223ViewSet, 'test1223')
urlpatterns = router.urls
