# Codigo SQL

```
create database if not exists tp_integrador;
use tp_integrador;

create table if not exists admins(
    id int PRIMARY KEY AUTO_INCREMENT,
    username varchar(50) NOT NULL,
    password VARCHAR(50) not null 
)

insert into admins (username, password) values
('root', '.'),
('admin', 'admin'),
('geroCorp', 'pass');

create table if not exists peliculas (
    id int PRIMARY KEY AUTO_INCREMENT,
    titulo varchar(50) NOT NULL,
    categoria varchar(50) NOT NULL,
    duracion int(10) NOT NULL,
    sinopsis text NOT NULL,
    imagen varchar(255) NOT NULL,
    tags varchar(255) not null,
    clasificacion varchar(50) not null
)

insert into peliculas (titulo, categoria, duracion, sinopsis, imagen, tags, clasificacion) values
("Como entrenar a tu dragon", "aventura", 2, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsum, dolor sed voluptates", "dragon.jpg", "2D,3D,E-MOTION", "ATP"),
("Metegol", "Comedia", 1, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsum, dolor sed voluptates", "gol.webp", "2D,3D,E-MOTION", "ATP"),
("Las guerreras kpop", "accion", 2, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsum, dolor sed voluptates", "kpop.jpg", "2D,3D,E-MOTION", "+13"),
("La la land", "terror", 3, "Lorem", "lala.jpg", "2D,3D,E-MOTION", "+16"),
("Harry potter 10", "fantasia", 2, "Lreom ipsum", "harry.jpg", "2D", "+16");

```