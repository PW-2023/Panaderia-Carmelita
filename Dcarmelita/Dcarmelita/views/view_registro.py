from django.shortcuts import render
from django.contrib.auth.models import User
from datetime import datetime

def registro(request):
    if request.method == 'GET':
        data = {
            'message_state': 'd-none',
            'message': ''
        }   
        return render(request, 'index.html', data)

    if request.method == 'POST':
        nombre = request.POST['nombre']
        apellidos = request.POST['apellidos']
        username = request.POST['username']
        email = request.POST['email']
        contrasena = request.POST['contrasena']

        usuario = User()

        usuario.set_password(contrasena)
        usuario.is_superuser = 0
        usuario.username = username
        usuario.first_name = nombre
        usuario.last_name = apellidos
        usuario.email = email
        usuario.is_staff = 0
        usuario.is_active = 1
        usuario.date_joined = datetime.today()

        usuario.save()
        
        data = {
            'message_state': '',    
            'message': 'USUARIO CREADO'
        }
        return render(request, 'index.html', data)