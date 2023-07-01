from django.shortcuts import render, redirect
import traceback
from django.contrib.auth import login as login_user, authenticate, logout as logout_user
from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist

def login(request):
    if request.method == 'GET':
        return render(request, 'index.html', {'message_error': None})
    elif request.method == 'POST':
        try:
            user = request.POST['username']
            password = request.POST['contrasena']

            username = authenticate(username=user, password=password)

            if username is not None:
                login_user(request, username)
                return redirect('/index')
            else:
                context = {'message_error': 'Usuario o contraseña inválidos'}
                return render(request, 'index.html', context)
        except Exception as e:
            traceback.print_exc()
            context = {'message_error': 'Error inesperado. Por favor, inténtelo nuevamente más tarde'}
            return render(request, 'index.html', context)         


def logout(request): 
    print('logout')
    try:    
        logout_user(request)
    except Exception as e:
        print('Error: ', e)        
    return redirect('/')

def update_pass(request):
    # VERIFICACIÓN SOLICITUD (REQUEST) POR MÉTODO POST
    if request.method == 'POST':
        # OBTENER INFORMACIÓN DEL FORMULARIO
        username = request.POST.get('username')
        secret = request.POST.get('contrasena')
        secret2 = request.POST.get('contrasena2')
        print('username: ', username)
        print('secret: ', secret)  
        print('secret2: ', secret2)  
                
        if secret != secret2 :
            context = {
                'message_error': 'Contraseñas no coinciden.' 
            }  
            print('context: ', context)
            return render(request, 'index.html', context)
      
        # BUSCAR USUARIO EN EL SISTEMA
        try:
            user = User.objects.get(username=username)
        except ObjectDoesNotExist as e:
            user = None
        print('user: ', user)                    
        # SI USUARIO SE ENCUENTA EN EL SISTEMA
        if user is not None:
            #  ACTUALIZANDO CONTRASEÑA DEL USUARIO GENERANDO ENCRIPTACIÓN DE ESTA.
            user.set_password(secret)
            user.save()
            context = {
                'message': 'Contraseña actualizada.' 
            }
        else:
            context = {
                'message_error': 'Problemas al actualizar la contraseña.' 
            }    
        print('context: ', context)        
        return render(request, 'index.html', context)     

