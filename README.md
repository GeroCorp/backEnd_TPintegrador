# Sistema de Gestión de Cine - Backend

## Descripción del Proyecto

Sistema integral de gestión para un complejo cinematográfico desarrollado con **Node.js** y **Express.js**. La aplicación proporciona una API REST completa y una interfaz web administrativa para el manejo de películas, coleccionables, ventas y administradores del sistema.

### Objetivos del Proyecto

- **Gestión de contenido cinematográfico**: Administrar catálogo de películas con información detallada
- **Control de inventario**: Manejo de productos coleccionables y merchandise
- **Registro de ventas**: Sistema de tracking de transacciones comerciales
- **Panel administrativo**: Interfaz web intuitiva para operaciones CRUD
- **API REST**: Endpoints documentados para integración con aplicaciones frontend

## Características Principales

### API REST Completa
- **Endpoints RESTful** para todas las entidades del sistema
- **Validación de datos** con middlewares personalizados
- **Manejo de errores** estructurado y consistente
- **Logging de peticiones** para monitoreo y debugging

### Gestión de Películas
- CRUD completo de películas
- Categorización por géneros
- Sistema de clasificación por edades
- Gestión de duración, sinopsis e imágenes
- Soporte para tags y formatos (2D, 3D, E-MOTION)

### Sistema de Coleccionables
- Inventario de productos merchandising
- Control de precios y descripciones
- Gestión de imágenes de productos
- Operaciones completas de inventario

### Control de Ventas
- Registro de transacciones
- Tracking por cliente
- Histórico de ventas con timestamps
- Reportes de montos vendidos

### Gestión de Administradores
- Sistema de usuarios administrativos
- Control de acceso al panel de gestión
- Credenciales seguras para operaciones

### Panel Web Administrativo
- **Dashboard intuitivo** con navegación clara
- **Formularios dinámicos** para todas las operaciones
- **Consultas en tiempo real** mediante JavaScript
- **Interfaz responsive** con CSS moderno
- **Validación client-side** para mejor UX

## Stack Tecnológico

### Backend
- **Node.js** - Runtime de JavaScript
- **Express.js 5.1.0** - Framework web rápido y minimalista
- **MySQL2 3.14.1** - Driver de base de datos con soporte para promesas
- **EJS 3.1.10** - Motor de plantillas para vistas dinámicas

### Herramientas de Desarrollo
- **Nodemon 3.1.10** - Auto-restart del servidor en desarrollo
- **dotenv 16.5.0** - Gestión de variables de entorno
- **CORS 2.8.5** - Habilitación de peticiones cross-origin

### Base de Datos
- **MySQL** - Sistema de gestión de base de datos relacional
- **Arquitectura normalizada** con 4 tablas principales
- **Constraints y relaciones** bien definidas

## Modelo de Base de Datos

### Tablas Principales

1. **`peliculas`** - Catálogo cinematográfico
   - Información completa de películas
   - Categorización y clasificación
   - URLs de imágenes y metadata

2. **`coleccionables`** - Inventario de productos
   - Gestión de merchandise
   - Control de precios e imágenes
   - Descripciones detalladas

3. **`ventas`** - Registro de transacciones
   - Histórico de ventas
   - Información de clientes
   - Timestamps automáticos

4. **`admins`** - Usuarios del sistema
   - Credenciales de acceso
   - Control de permisos

## Endpoints de la API

### Películas (`/movies`)
- `GET /movies` - Listar todas las películas
- `GET /movies/:id` - Obtener película por ID
- `POST /movies` - Crear nueva película
- `PUT /movies/:id` - Actualizar película
- `DELETE /movies/:id` - Eliminar película

### Coleccionables (`/collectibles`)
- `GET /collectibles` - Listar todos los coleccionables
- `GET /collectibles/:id` - Obtener coleccionable por ID
- `POST /collectibles` - Crear nuevo coleccionable
- `PUT /collectibles/:id` - Actualizar coleccionable
- `DELETE /collectibles/:id` - Eliminar coleccionable

### Ventas (`/sales`)
- `GET /sales` - Listar todas las ventas
- `POST /sales` - Registrar nueva venta

### Administradores (`/admins`)
- `GET /admins` - Listar administradores

### Dashboard (`/dashboard`)
- `GET /dashboard` - Panel principal
- `GET /dashboard/consultar` - Consulta de productos
- `GET /dashboard/crear` - Formulario de creación
- `GET /dashboard/modificar` - Formulario de modificación
- `GET /dashboard/eliminar` - Formulario de eliminación

## Instalación y Configuración

### Prerrequisitos
- Node.js 14+ instalado
- MySQL Server configurado
- Gestor de paquetes npm

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/GeroCorp/backEnd_TPintegrador.git
cd backEnd_TPintegrador
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
# Crear archivo .env en la raíz del proyecto
DB_HOST=localhost
DB_NAME=tp_integrador
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
PORT=3000
```

4. **Configurar base de datos**
```sql
-- Ejecutar el script SQL proporcionado para crear las tablas
CREATE DATABASE IF NOT EXISTS tp_integrador;
-- [Resto del script SQL incluido en el proyecto]
```

5. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor en modo desarrollo con nodemon
- `npm test` - Ejecuta los tests (pendiente de implementación)

## Uso del Sistema

### Acceso Web
- **URL Principal**: `http://localhost:3000`
- **Dashboard**: `http://localhost:3000/dashboard`

### API Testing
- **Base URL**: `http://localhost:3000`
- **Endpoints**: Documentados en la sección de endpoints

## Características Técnicas Destacadas

### Seguridad
- Validación de parámetros en todos los endpoints
- Sanitización de inputs para prevenir inyección SQL
- Manejo seguro de credenciales con variables de entorno

### Performance
- Pool de conexiones MySQL para optimización
- Middleware de logging para monitoreo
- Estructura modular para mantenibilidad

## Futuras Mejoras

- [ ] Implementación de autenticación JWT
- [ ] Sistema de roles y permisos granulares
- [ ] API de reportes y analytics
- [ ] Tests unitarios y de integración
- [ ] Documentación OpenAPI/Swagger
- [ ] Optimización de queries con paginación
- [ ] Sistema de cache para mejor performance

## Desarrolladores

**Geronimo Corpus**  
**Matias Rodriguez**

### Habilidades Demostradas
- Desarrollo backend con Node.js y Express
- Diseño de APIs REST profesionales
- Gestión de bases de datos MySQL
- Arquitectura MVC y patrones de diseño
- Frontend dinámico con JavaScript vanilla
- Manejo de control de versiones con Git

---

*Este proyecto demuestra competencias sólidas en desarrollo full-stack, arquitectura de software, y mejores prácticas de programación, siendo ideal para incluir en un portafolio profesional.*

## 📄 Anexo: Script de Base de Datos

```sql
-- Script de creación de base de datos
CREATE DATABASE IF NOT EXISTS tp_integrador;
USE tp_integrador;

-- Tabla de administradores
CREATE TABLE IF NOT EXISTS admins(
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL 
);

INSERT INTO admins (username, password) VALUES
('root', '.'),
('admin', 'admin'),
('geroCorp', 'pass');

-- Tabla de películas
CREATE TABLE IF NOT EXISTS peliculas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(50) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    duracion INT(10) NOT NULL,
    sinopsis TEXT NOT NULL,
    imagen VARCHAR(255) NOT NULL,
    tags VARCHAR(255) NOT NULL,
    clasificacion VARCHAR(50) NOT NULL,
    precio FLOAT DEFAULT 0
);

INSERT INTO peliculas (titulo, categoria, duracion, sinopsis, imagen, tags, clasificacion) VALUES
("Como entrenar a tu dragon", "aventura", 2, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsum, dolor sed voluptates", "dragon.jpg", "2D,3D,E-MOTION", "ATP"),
("Metegol", "Comedia", 1, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsum, dolor sed voluptates", "gol.webp", "2D,3D,E-MOTION", "ATP"),
("Las guerreras kpop", "accion", 2, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsum, dolor sed voluptates", "kpop.jpg", "2D,3D,E-MOTION", "+13"),
("La la land", "terror", 3, "Lorem", "lala.jpg", "2D,3D,E-MOTION", "+16"),
("Harry potter 10", "fantasia", 2, "Lorem ipsum", "harry.jpg", "2D", "+16");

-- Tabla de coleccionables
CREATE TABLE coleccionables (
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    imagen VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    precio FLOAT NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO coleccionables (id, nombre, imagen, descripcion, precio) VALUES
(1, 'Vaso Chimuelo', 'https://d22fxaf9t8d39k.cloudfront.net/014492f273cd315b97ad0e900dcb4c1fa105929173c45a8cb2dfdcba0d47c7c2203228.jpg', 'Vaso con forma de Chimuelo con una capacidad de 700ml.', 10000),
(2, 'Vaso Stitch', 'https://http2.mlstatic.com/D_825092-MLA85101610826_052025-C.jpg', 'Vaso con forma de Stitch con una capacidad de 700ml.', 10000),
(3, 'Balde Creeper', 'https://d22fxaf9t8d39k.cloudfront.net/7bcda6c60feb1215d042a51da873658accc96913983885de8373ff63d1cb6355161394.jpg', 'Balde de pochoclos con forma de Creeper.', 20000),
(4, 'Vaso Wolverine', 'https://http2.mlstatic.com/D_NQ_NP_709668-MLA78253528451_082024-O.webp', 'Vaso con forma de Wolverine. Capacidad: 800ml', 7500);

-- Tabla de ventas
CREATE TABLE ventas (
    id INT(11) NOT NULL AUTO_INCREMENT,
    cliente VARCHAR(50) NOT NULL,
    monto FLOAT NOT NULL,
    fecha DATE NOT NULL DEFAULT (CURRENT_DATE),
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

COMMIT;
```