import salesModels from "../models/sales.models";


export const getAllSales = async(req, res) =>{
    try{

        const [ rows ]= await salesModels.selectAllSales();

        res.status(200).json({
            payload: rows,
            message: rows.lenght === 0 ? `Sales not found` : `Sales founded`
        })
    }catch (e){
        console.error(e);
        res.status(500).json({
            error: `Internal server error`
        })
    }
}

export const createNewSale = async (req, res) =>{
    try {

        const [rows] = await salesModels.insertNewSale(cliente, monto, fecha);

        res.status(201).json({
            message: `Sale added succesfullly`,
        })

    } catch (e) {
        console.error(e)

        res.status(500).json({
            message: "Interal server error",
            error: e.message
        })
    }
}