from django.shortcuts import redirect, render
from Dcarmelita.Carrito import Carrito  # Importar desde el módulo Carrito.py dentro del paquete actual

from Dcarmelita.models.models import Producto

def listar_productos(request):
    productos = Producto.objects.all()
    return render(request, 'productos.html', {'productos': productos})

def agregar_producto(request, producto_id):
    carrito = Carrito(request)
    producto = Producto.objects.get(id=producto_id)
    carrito.agregar(producto)
    carrito.guardar_carrito()  # Guardar el carrito en la sesión
    return redirect("productos")

def eliminar_producto(request,producto_id):
    carrito = Carrito (request)
    producto = Producto.objects.get(id=producto_id)
    carrito.eliminar(producto)
    return redirect ("productos")

def restar(request,producto_id):
    carrito = Carrito (request)
    producto = Producto.objects.get(id=producto_id)
    carrito.restar(producto)
    return redirect ("productos")

def limpiar_carrito(request):
    carrito = Carrito(request)
    carrito.limpiar()
    return redirect ("productos")