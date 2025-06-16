import express from 'express';
import rutas from './rutas/ruta_iras.js';
import {PORT} from './config.js';

const app=express();
app.use(express.json());
app.use('/api',rutas);
app.use((req,res,next)=>{
    res.status(404).json({message:'ruta no encontrada'});
})

app.listen(PORT);

console.log('ejecutandose en el puerto:',PORT);