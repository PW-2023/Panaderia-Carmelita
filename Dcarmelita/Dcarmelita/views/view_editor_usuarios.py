from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from datetime import datetime


def create(request):

    nombre = request.POST['nombre']
    apellidos = request.POST['apellidos']
    email = request.POST['email']
    username = request.POST['username']
    password = request.POST['password']

    usuario = User()    

    usuario.set_password(password)
    usuario.id = User().id
    usuario.is_superuser = 0
    usuario.username = username 
    usuario.first_name = nombre
    usuario.last_name = apellidos
    usuario.email = email
    usuario.is_staff = 0
    usuario.is_active = 1
    usuario.date_joined = datetime.today()
    usuario.save()
    usuarios = User.objects.all()

    data = {
            'active_usuarios': 'active', 
            'message_state': '',
            'message': 'Usuario Creado',
            'usuarios': usuarios,
            }        
    return render (request, 'editor_usuarios.html', data)

def delete(request):
    id = request.POST['id']
    usuario = User.objects.get(pk=id)
    nombre_usuario = usuario.first_name
    usuario.delete()
    usuarios = User.objects.all()
    data = {
            'active_usuario': 'active', 
            'message_state': '',
            'message': 'Usuario eliminado // ID: {0} // Nombre: {1}'.format(id, nombre_usuario),
            'usuarios': usuarios,
            }        
    return render (request, 'editor_usuarios.html', data)    


def update(request):

    id = request.POST['id']
    nombre = request.POST['nombre']
    apellidos = request.POST['apellidos']
    email = request.POST['email']
    username = request.POST['username']
    password = request.POST['password']

    usuario = User.objects.get(pk=id)
    nombre_usuario = usuario.first_name

    usuario.id = id
    usuario.first_name = nombre
    usuario.last_name = apellidos
    usuario.email = email
    usuario.username = username
    usuario.set_password(password)
    usuario.save(force_update=True)
    usuarios = User.objects.all()
    data = {
            'active_usuario': 'active', 
            'message_state': '',
            'message': 'Usuario actualizado // ID: {0} // Nombre: {1}'.format(id, nombre_usuario),
            'usuarios': usuarios,
            }       
    return render (request, 'editor_usuarios.html', data) 

def editor_usuarios(request):
    if request.user is not None and request.user.is_authenticated:      
        print(request)  
        if request.method == 'GET':
            usuarios = User.objects.all()                
            data = {
                    'active_usuarios': 'active', 
                    'message_state': 'd-none',
                    'message': '',
                    'usuarios': usuarios,                
                    }
            return render (request, 'editor_usuarios.html', data)  
        
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