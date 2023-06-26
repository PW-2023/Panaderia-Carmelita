from django.db import models
     
# class User (models.Model):
#     nombres = models.CharField(max_length=120)
#     apellidos = models.CharField(max_length=120)
#     telefono = models.IntegerField()

#     class Meta:
#         managed = True
#         db_table = 'contact'      

class Producto (models.Model):
    id = models.IntegerField(primary_key=True)  
    imagen = models.CharField(max_length=120)
    nombre = models.CharField(max_length=120)
    descripcion = models.CharField(max_length=300)
    valor = models.IntegerField()       
    
    class Meta:
        managed = False 
        db_table = 'producto' 


        
# class contacto (models.Model):
#     id = models.IntegerField(primary_key=True)
#     nombre = models.CharField(max_length=120)
#     apellido = models.CharField(max_length=120)
#     mail =models.CharField(max_length=120)
#     contrasena = models.CharField(max_length=120)
    
#     class Meta:
#         managed = False
#         db_table = 'contacto'