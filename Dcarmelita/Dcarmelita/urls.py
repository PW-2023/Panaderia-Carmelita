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
    
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', view_index.index),
    path('productos/', view_productos.productos),
    path('index/', view_index.index),
    path('formulario/', view_formulario.formulario),
    path('quienessomos/', view_quienessomos.quienessomos),
    path('mapa/', view_mapa.mapa),
    path('registro', view_registro.registro),
    path('login', view_login.login),
    path('logout', view_login.logout),
]
