from ventas.models import Cuerpo, Encabezado, Producto
from rest_framework import viewsets, permissions
from .serializers import ProductoSerializer, EncabezadoSerializer, CuerpoSerializer
from rest_framework.response import Response


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

    def update(self, request, pk=None):
        try:
            producto = Producto.objects.filter(id=pk)
            payload = request.data
            producto.update(**payload)
            return Response({'status': 'Updated.'})
        except Exception as e:
            print(e)
            return Response({'status': 'Not found.'}, 404)


class EncabezadoViewSet(viewsets.ModelViewSet):
    queryset = Encabezado.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = EncabezadoSerializer


class CuerpoViewSet(viewsets.ModelViewSet):
    queryset = Cuerpo.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = CuerpoSerializer
