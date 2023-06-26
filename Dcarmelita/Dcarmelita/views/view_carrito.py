from django.shortcuts import render
from Dcarmelita.models.models import Producto

def listar_productos(request):
    productos = Producto.objects.all()
    return render(request, 'productos.html', {'productos': productos})
