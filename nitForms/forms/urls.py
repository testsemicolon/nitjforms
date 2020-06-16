from rest_framework import routers
from . api import *


router = routers.DefaultRouter()

router.register('forms', CreateFormsViewSet, 'forms')
urlpatterns = router.urls

router.register('name', FormNameViewSet, 'name')
urlpatterns = router.urls


router.register('cxzCzx', cxzCzxViewSet, 'cxzCzx')
urlpatterns = router.urls


router.register('test1', test1ViewSet, 'test1')
urlpatterns = router.urls


router.register('jatin', jatinViewSet, 'jatin')
urlpatterns = router.urls


router.register('chahahattt', chahahatttViewSet, 'chahahattt')
urlpatterns = router.urls


router.register('asasa', asasaViewSet, 'asasa')
urlpatterns = router.urls


router.register('asasa', asasaViewSet, 'asasa')
urlpatterns = router.urls
