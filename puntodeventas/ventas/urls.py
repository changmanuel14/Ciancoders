from rest_framework import routers
from .api import ProductoViewSet, CuerpoViewSet, EncabezadoViewSet, ProductoViewSet1

router = routers.DefaultRouter()
router.register('api/productos', ProductoViewSet, 'productos')
router.register('api/productos1', ProductoViewSet1, 'productos1')
router.register('api/encabezados', EncabezadoViewSet, 'encabezados')
router.register('api/cuerpos', CuerpoViewSet, 'cuerpos')

urlpatterns = router.urls
