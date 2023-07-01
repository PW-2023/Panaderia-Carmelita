from django.shortcuts import render, redirect
from Dcarmelita.models.models import Producto, Fotos

def create(request):

    nombre = request.POST['nombre']
    descripcion = request.POST['descripcion']
    imagen = request.FILES['imagen']
    valor = request.POST['valor']

    foto = Fotos()
    foto.nombre_archivo = 'img/' + request.POST['nombre_archivo']
    foto.imagen_real = imagen
    foto.save()

    producto = Producto()
    producto.nombre = nombre
    producto.imagen = foto.nombre_archivo
    producto.descripcion = descripcion
    producto.valor = valor
    producto.save()
    productos = Producto.objects.all()
    
    data = {
            'active_producto': 'active', 
            'message_state': '',
            'message': 'Producto Creado',
            'productos': productos,
            }        
    return render (request, 'editor_productos.html', data)

def delete(request):
    id = request.POST['id']
    producto = Producto.objects.get(pk=id)
    nombre_producto = producto.nombre
    producto.delete()
    productos = Producto.objects.all()
    data = {
            'active_producto': 'active', 
            'message_state': '',
            'message': 'Producto eliminado // ID: {0} // Nombre: {1}'.format(id, nombre_producto),
            'productos': productos,
            }        
    return render (request, 'editor_productos.html', data)    

def update(request):
    id = request.POST['id']
    nombre = request.POST['nombre']
    descripcion = request.POST['descripcion']
    #imagen = request.POST['imagen']
    foto = Fotos()
    
    if 'imagen' in request.FILES:
        imagen = request.FILES['imagen']
        foto.imagen_real = imagen if imagen else foto.imagen_real
    else:
        # Manejar el caso en el que no se envíe una imagen
        imagen = None
    
    
    foto.nombre_archivo = 'img/' + request.POST['nombre_archivo']
    foto.imagen_real = imagen
    foto.save()
    fotos = Fotos.objects.all()

    valor = request.POST['valor']
    producto = Producto.objects.get(pk=id)
    
    # for foto in fotos:
    #      if  foto.nombre_archivo != Producto.objects.get(pk=id).imagen:
    #          producto.imagen = foto.nombre_archivo
    #      else:
    #          producto.imagen = Producto.objects.get(pk=id).imagen


    producto.id = id
    producto.nombre = nombre
    producto.imagen = foto.nombre_archivo if imagen else producto.imagen
    nombre_producto = producto.nombre
    producto.descripcion = descripcion
    producto.valor = valor
    producto.save(force_update=True)
    productos = Producto.objects.all()
    data = {
            'active_producto': 'active', 
            'message_state': '',
            'message': 'Producto actualizado // ID: {0} // Nombre: {1}'.format(id, nombre_producto),
            'productos': productos,
            }       
    return render (request, 'editor_productos.html', data)  

def editor_productos(request):
    if request.user is not None and request.user.is_authenticated:      
        print(request)  
        if request.method == 'GET':
            productos = Producto.objects.all()                
            data = {
                    'active_producto': 'active', 
                    'message_state': 'd-none',
                    'message': '',
                    'productos': productos,                
                    }
            return render (request, 'editor_productos.html', data)  
        
        if request.method == 'POST':
            action = request.POST['action']
            if action == 'CREATE':
                return create(request)
            if action == 'DELETE':
                return delete(request)
            elif action == 'UPDATE':
                return update(request)
            
    else:
        return redirect('/')