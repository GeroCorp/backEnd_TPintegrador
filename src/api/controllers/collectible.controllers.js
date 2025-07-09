import Products from "../models/collectible.models.js";

// Get all prods
export const getAllCollectibles = async (req, res) => {
    
    // 1. Optimization, manejo de errores try/catch
    try {
        
        /* LOGICA EXPORTADA AL MODELO
        let sql = "SELECT * FROM productos";

        // Al usar [rows] la desestructuracion extrae directamente las filas (que es el primer elemento del resultado de la consulta),
        // nos sirve porque hace el codigo mas legible y explicito

        //const [rows] = await connection.query(sql); */

        let [rows] = await Products.selectAllCollectibles();

        // 2. Responder con exito aunque esté vacío
        // Return as JSON plain text
        res.status(200).json({
            payload: rows,
            message: rows.length === 0 ? "Products not found" : "Products found"
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal error from server"
        })
    }
    
}
    // GET PRODUCT BY ID 
export const getCollectibleById = async (req, res) =>{
    try {
        
        let { id } = req.params;

        const [rows] = await Products.selectCollectibleFromId(id);

        if(rows.length === 0){
            return res.status(404).json({
                error: `Product by ID: ${id} not found` 
            })
        }

        res.status(200).json({
            payload: rows
        })

    } catch (e) {
        console.error(e)
        res.status(500).json({
            error: "Internal error obtaining ID product"
        })
    }
}
    // INSERT PRODUCT
export const createCollectible = async (req, res) =>{

    try{
        let { name, image, desc, price } = req.body;

        if(!name || !desc || !price) {
            return res.status(400).jdon({
                message: "Invalid values, make sure to send NAME, DESC and PRICE"
            })
        }

        const [ rows ] = await Products.insertNewCollectible(name, image, desc, price);

        res.status(201).json({
            message: "Product created succesfully",
            productId: rows.insertedId
        });
    }catch (e){
        console.error(e);

        res.status(500).json({
            message:"Interal server error",
            error: error.message
        })
    }
}

    // MODIFY PRODUCT
export const modifyCollectible = async (req, res) => {
    try {
        let { id, name, image, desc, price } = req.body;

        if(!id || !name || !desc || !price) {
            return res.status(400).json({
                message: "Faltan campos requeridos"
            });
        }

        const [result] = await Products.updateCollectible(name, image, desc, price, id);

        // Testearmos que se actualizara
        if(result.affectedRows === 0) {
            return res.status(400).json({
                message: "No se actualizo el producto"
            })
        }

        res.status(200).json({
            message: "Producto actualizado correctamente"
        });

    } catch (error) {
        console.error("Error al actualizar el producto", error);

        res.status(500).json({
            message: "Error interno del servidor",
            error: error.message
        })
    }
}

    // REMOVE PRODUCT
export const removeCollectible = async (req, res) => {
    try {
        let { id } = req.params;

        if(!id) {
            return res.status(400).json({
                message: "ID is required"
            })
        }

        let [result] = await Products.deleteCollectible(id);

        // Testearmos que se eliminara
        if(result.affectedRows === 0) {
            return res.status(400).json({
                message: `Product by ID:${id} not found`
            });
        }

        return res.status(200).json({
            message: `Producto con id ${id} eliminado correctamente`
        });

    } catch (error) {
        console.error("Error en DELETE /products/:id", error);

        res.status(500).json({
            message: `Error al eliminar producto con id ${id}`, error,
            error: error.message
        })
    }
}