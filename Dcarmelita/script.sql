
-- CREACION DE TABLA PRODUCTO

CREATE TABLE producto(
    id INT PRIMARY KEY,
    imagen VARCHAR(120) NOT NULL,
    nombre VARCHAR(120) NOT NULL,
    descripcion VARCHAR(300) NOT NULL,
    valor INT NOT NULL
);

INSERT INTO producto (id,imagen,nombre,descripcion,valor) VALUES (1,'pan de nuez.webp','Pan De Campo Nuez','Pan de campo de masa madre con nueces molidas',3500)
INSERT INTO producto (id,imagen,nombre,descripcion,valor) VALUES (2,'pan brioche.webp','Pan Brioche','Esponjoso pan dulce hecho de huevo y leche',3000)
INSERT INTO producto (id,imagen,nombre,descripcion,valor) VALUES (3,'pan de chocolate.webp','Pan De Chocolate','Pan de masa madre dulce sabor chocolate',4000)
INSERT INTO producto (id,imagen,nombre,descripcion,valor) VALUES (4,'pan de centeno.webp','Pan De Centeno','Pan de molde integral con semillas',2000)
INSERT INTO producto (id,imagen,nombre,descripcion,valor) VALUES (5,'empanada pino.webp','Empanada de Pino','Empanada de horno con carne picada',3000)
INSERT INTO producto (id,imagen,nombre,descripcion,valor) VALUES (6,'cheescake.webp','Cheescake Chocolate','Cheescake de crema pastelera y de chocolate',2500)
INSERT INTO producto (id,imagen,nombre,descripcion,valor) VALUES (7,'mufin de chocolate.webp','Muffin Chocolate ','Muffin de chocolate, con centro de chocolate',1900)
INSERT INTO producto (id,imagen,nombre,descripcion,valor) VALUES (8,'palmeritas.webp','Palmeritas','Palmetas crujientes, y cubiertas por caramelo',1000)

-- CREACION DE TABLA CONTACTO
CREATE TABLE contacto(
    id INT PRIMARY KEY,
    nombre VARCHAR(120) NOT NULL,
    apellido VARCHAR(120) NOT NULL,
    mail VARCHAR(120) NOT NULL,
    contrasena VARCHAR(120)NOT NULL
);