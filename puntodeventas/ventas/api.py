from ventas.models import Cuerpo, Encabezado, Producto
from rest_framework import viewsets, permissions
from .serializers import ProductoSerializer, EncabezadoSerializer, CuerpoSerializer


class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProductoSerializer


class EncabezadoViewSet(viewsets.ModelViewSet):
    queryset = Encabezado.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = EncabezadoSerializer


class CuerpoViewSet(viewsets.ModelViewSet):
    queryset = Encabezado.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = CuerpoSerializer
