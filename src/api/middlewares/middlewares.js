// Middleware Logger para analizar y registrar las solicitudes
const loggerUrl = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next();
};


////////////////////////
// Middleware de ruta -> Aplicados a rutas especificas y ejecutadas solo cuando una solicitud coincide con la ruta definida
const validateId = (req, res, next) => {
    const id = req.params.id; // o tambine, mas optimo const { id } = req.params;

    if(!id || isNaN(id)) {
        return res.status(400).json({
            error: "El ID debe ser un numero"
        });
    }

    // Convertimos el parametro id (originalmente un string porque viene de la url) en un enttero decimal
    req.id = parseInt(id, 10); 

    next();
};

/////////////
// Middleware que valida los datos ingresados para crear o modificar una pelicula

const validateMovie = (req, res, next) => {

    const {titulo, genero, clasificacion, duracion, sinopsis, imagen} = req.body;

    if(!titulo || !genero || !clasificacion || !duracion || !sinopsis || !imagen) {
        return res.status(400).json({
            message: "Invalid values, make sure to send Titulo, Genero, Clasificacion, Duracion, Sinopsis and Imagen"
        })
    }

    next();

};

const validateCollectible = (req, res, next) => {

    const {name, image, desc, price} = req.body;

    if(!name || !image || !desc || !price) {
        return res.status(400).json({
            message: "Invalid values, make sure to send nombre, imagen, descripcion and precio"
        })
    }

    next();

};

export {
    loggerUrl,
    validateId,
    validateMovie,
    validateCollectible
}