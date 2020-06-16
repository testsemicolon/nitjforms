from rest_framework import routers
from . api import *


router = routers.DefaultRouter()

router.register('forms', CreateFormsViewSet, 'forms')
urlpatterns = router.urls

router.register('name', FormNameViewSet, 'name')
urlpatterns = router.urls


router.register('cxzCzx', cxzCzxViewSet, 'cxzCzx')
urlpatterns = router.urls
