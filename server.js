//Forma de hacer el import de express con NodeJS (antes)
// const express = require("express");

//Forma de hacer el import de express con NodeJS (ahora)
import Express  from "express";

const app = Express();

app.use(Express.json())

//Agregar rutas al servidor
//Ruta tipo GET
app.get('/vehiculos', (req, resp) => {
    //Mensaje en consola
    console.log('Alguien hizo get en la ruta /vehiculos');
    //Mensaje en la pagina
    // resp.send('Hola mundo soy una ruta get en Express');

    const vehiculos = [
        {nombre:'corolla', marca:'toyota', modelo:'2014'},
        {nombre:'fiesta', marca:'ford', modelo:'2015'},
        {nombre:'yaris', marca:'toyota', modelo:'2019'},
        {nombre:'cx30', marca:'mazda', modelo:'2023'}
    ]
    resp.send(vehiculos);
});

//Ruta tipo POST
app.post('/vehiculos/nuevo', (req, resp) => {
    //Crear codigo para crear vehiculo en la BD
    console.log("Vehiculo a crear", req.body);
    resp.send("ok, vehiculo creado");
});

app.listen(5000, () => {
    console.log('escuchando puerto 5000');
});


