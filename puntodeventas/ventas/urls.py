from rest_framework import routers
from .api import ProductoViewSet, CuerpoViewSet, EncabezadoViewSet

router = routers.DefaultRouter()
router.register('api/productos', ProductoViewSet, 'productos')
router.register('api/encabezados', EncabezadoViewSet, 'encabezados')
router.register('api/cuerpos', CuerpoViewSet, 'cuerpos')

urlpatterns = router.urls
