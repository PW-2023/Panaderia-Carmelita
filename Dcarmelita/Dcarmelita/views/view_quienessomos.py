from django.shortcuts import render

def quienessomos(request):
    return render (request,'quienessomos.html',{})