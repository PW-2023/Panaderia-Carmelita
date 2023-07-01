from django.db import models
     
# class User (models.Model):
#     nombres = models.CharField(max_length=120)
#     apellidos = models.CharField(max_length=120)
#     telefono = models.IntegerField()

#     class Meta:
#         managed = True
#         db_table = 'contact'      

class Producto (models.Model):
    id = models.AutoField(primary_key=True)
    imagen = models.CharField(max_length=120)
    nombre = models.CharField(max_length=120)
    descripcion = models.CharField(max_length=300)
    valor = models.IntegerField()       
    
    class Meta:
        managed = True 
        db_table = 'producto' 

class Fotos (models.Model):
    id = models.AutoField(primary_key=True)
    nombre_archivo = models.CharField(max_length=120)
    imagen_real = models.ImageField(upload_to='Dcarmelita/static/img/')  # Campo para guardar la imagen en una carpeta específica   
    
    class Meta:
        managed = True 
        db_table = 'fotos' 


        
# class contacto (models.Model):
#     id = models.IntegerField(primary_key=True)
#     nombre = models.CharField(max_length=120)
#     apellido = models.CharField(max_length=120)
#     mail =models.CharField(max_length=120)
#     contrasena = models.CharField(max_length=120)
    
#     class Meta:
#         managed = False
#         db_table = 'contacto'