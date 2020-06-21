from rest_framework import routers
from .api import *


router = routers.DefaultRouter()

router.register("forms", CreateFormsViewSet, "forms")
urlpatterns = router.urls

router.register("name", FormNameViewSet, "name")
urlpatterns = router.urls



router.register('Hello', HelloViewSet, 'Hello')
urlpatterns = router.urls


router.register('SAFePOPM', SAFePOPMViewSet, 'SAFePOPM')
urlpatterns = router.urls


router.register('dasdasdad', dasdasdadViewSet, 'dasdasdad')
urlpatterns = router.urls
