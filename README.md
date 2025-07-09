# Codigo SQL

```sql
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


CREATE TABLE `coleccionables` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `precio` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

ALTER TABLE `coleccionables`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `coleccionables`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

INSERT INTO `coleccionables` (`id`, `nombre`, `imagen`, `descripcion`, `precio`) VALUES
(1, 'Vaso Chimuelo', 'https://d22fxaf9t8d39k.cloudfront.net/014492f273cd315b97ad0e900dcb4c1fa105929173c45a8cb2dfdcba0d47c7c2203228.jpg', 'Vaso con forma de Chimuelo con una capacidad de 700ml.', 10000),
(2, 'Vaso Stitch', 'https://http2.mlstatic.com/D_825092-MLA85101610826_052025-C.jpg', 'Vaso con forma de Stitch con una capacidad de 700ml.', 10000),
(3, 'Balde Creeper', 'https://d22fxaf9t8d39k.cloudfront.net/7bcda6c60feb1215d042a51da873658accc96913983885de8373ff63d1cb6355161394.jpg', 'Balde de pochoclos con forma de Creeper.\r\n', 20000),
(4, 'Vaso Wolverine', 'https://http2.mlstatic.com/D_NQ_NP_709668-MLA78253528451_082024-O.webp', 'Vaso con forma de Wolverine.Capacidad: 800ml', 7500);


```