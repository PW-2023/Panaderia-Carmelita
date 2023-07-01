
-- CREACION DE TABLA PRODUCTO

CREATE TABLE producto(
    id INT PRIMARY KEY,
    imagen VARCHAR(120) NOT NULL,
    nombre VARCHAR(120) NOT NULL,
    descripcion VARCHAR(300) NOT NULL,
    valor INT NOT NULL
);

INSERT INTO producto (id,imagen,nombre,descripcion,valor) VALUES 
(1,'img/pan de nuez.webp','Pan De Campo Nuez','Pan de campo de masa madre con nueces molidas',3500),
(2,'img/pan brioche.webp','Pan Brioche','Esponjoso pan dulce hecho de huevo y leche',3000),
(3,'img/pan de chocolate.webp','Pan De Chocolate','Pan de masa madre dulce sabor chocolate',4000),
(4,'img/pan de centeno.webp','Pan De Centeno','Pan de molde integral con semillas',2000),
(5,'img/empanada pino.webp','Empanada de Pino','Empanada de horno con carne picada',3000),
(6,'img/cheescake.webp','Cheescake Chocolate','Cheescake de crema pastelera y de chocolate',2500),
(7,'img/mufin de chocolate.webp','Muffin Chocolate ','Muffin de chocolate, con centro de chocolate',1900),
(8,'img/palmeritas.webp','Palmeritas','Palmetas crujientes, y cubiertas por caramelo',1000);
