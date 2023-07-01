"""
URL configuration for Dcarmelita project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from Dcarmelita.views import view_index 
from Dcarmelita.views import view_productos 
from Dcarmelita.views import view_formulario
from Dcarmelita.views import view_quienessomos
from Dcarmelita.views import view_mapa
from Dcarmelita.views import view_registro
from Dcarmelita.views import view_login
from Dcarmelita.views import view_editor_productos
from Dcarmelita.views import view_editor_usuarios   
from .views.view_carrito import agregar_producto, eliminar_producto, limpiar_carrito, restar
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', view_index.index),
    path('productos/', view_productos.productos,name="productos"),
    path('index/', view_index.index),
    path('formulario/', view_formulario.formulario),
    path('quienessomos/', view_quienessomos.quienessomos),
    path('mapa/', view_mapa.mapa),
    path('registro', view_registro.registro),
    path('login', view_login.login),
    path('logout', view_login.logout),
    path('password_update', view_login.update_pass),
    path('editar-productos/', view_editor_productos.editor_productos, name='editar_productos'),
    path('editar-usuarios/', view_editor_usuarios.editor_usuarios, name='editar_usuarios'),
        # CARRITO
    path('agregar/<int:producto_id>/', agregar_producto, name="Add"),
    path('eliminar/<int:producto_id>/', eliminar_producto, name="Del"),
    path('restar/<int:producto_id>/', restar, name="Sub"),
    path('limpiar/', limpiar_carrito, name="CLS"),
]
    