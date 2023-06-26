from django.shortcuts import render
from Dcarmelita.models.models import Producto


def productos(request):
    producto = Producto()
    producto.id = Producto().id
    producto.nombre = Producto().nombre
    producto.imagen = Producto().imagen
    producto.descripcion = Producto().descripcion
    producto.valor = Producto().valor
    productos = Producto.objects.all()
    data = {
               
                'productos': productos,
                }        
    
    return render (request,'productos.html',data)