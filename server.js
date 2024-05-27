import express from "express";
import cancionesRouter from './rutascanciones.js'

const PORT = 3000;
const app =  express();
app.use(express.json());

app.use('/', cancionesRouter)


app.listen(PORT, console.log(`http://localhost:${PORT}`));
