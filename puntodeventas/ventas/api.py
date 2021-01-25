from ventas.models import Cuerpo, Encabezado, Producto
from rest_framework import viewsets, permissions
from .serializers import ProductoSerializer, EncabezadoSerializer, CuerpoSerializer


class ProductoViewSet1(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProductoSerializer


class ProductoViewSet(viewsets.ModelViewSet):
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProductoSerializer

    def get_queryset(self):
        return self.request.user.producto.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


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
