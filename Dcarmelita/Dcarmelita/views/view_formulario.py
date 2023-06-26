from django.shortcuts import render

def formulario(request):
    return render (request,'formulario.html',{})