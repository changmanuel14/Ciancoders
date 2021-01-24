from rest_framework import serializers
from ventas.models import Cuerpo, Encabezado, Producto


class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'


class CuerpoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cuerpo
        fields = '__all__'


class EncabezadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Encabezado
        fields = '__all__'
