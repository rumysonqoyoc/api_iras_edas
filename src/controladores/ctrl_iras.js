import {pool} from '../db.js';
export const get_iras=async (req,res)=>{
    try{
        const [resultado]=await pool.query('select * from iras');  
        res.json(resultado);
    }catch(error){
        return res.status(500).json({message:'ocurrio un error'});
    }
    
};

export const get_iras_micro=async (req,res)=>{
    try{
        const [filas]=await pool.query('select * from iras where cod_micro = ?',[req.params.cod_mic])
        if(filas.length <=0){
            return res.status(404).json({message:'no se encontraron datos'});
        }
        res.json(filas);
    }catch(error){
        return res.status(500).json({message:'hubo un error'});
    }
    
}
