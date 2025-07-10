import admins from "../models/admins.models.js"

export const getAllAdmins = async(req, res) =>{
    try{

        const [ rows ]= await admins.selectAllAdmins();

        res.status(200).json({
            payload: rows,
            message: rows.lenght === 0 ? `Admins account not found` : `Admins founded`
        })
    }catch (e){
        console.error(e);
        res.status(500).json({
            error: `Internal server error`
        })
    }
}