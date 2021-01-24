from django.db import models

# Create your models here.


class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    precio = models.FloatField()
    imagen = models.CharField(max_length=500)
    existencia = models.IntegerField()


class Encabezado(models.Model):
    nombre = models.CharField(max_length=100)
    direccion = models.CharField(max_length=100)
    nit = models.CharField(max_length=10)
    fecha = models.DateTimeField(auto_now_add=True)
    precioT = models.FloatField()


class Cuerpo(models.Model):
    encabezado = models.ForeignKey(Encabezado, on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    cantidad = models.IntegerField()
    precio = models.FloatField()
