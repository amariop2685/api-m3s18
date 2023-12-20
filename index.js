console.log("Entro al archivo index.js");

const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
require('dotenv').config()
const port = process.env.PORT;
app.use(cors());

let platillos = [
    {
        id: 1,
        nombre: "Guacamole",
        precio: 20.35
    }
];

app.get('/', (req, res) => {
  res.send('API de Platillos V.1.0');
});




app.get('/platillos', (req, res) => {
    //Listar platillos
    res.json({
        mensaje: "Platillos disponibles",
        data: platillos
    });
  });



  app.post('/platillos', (req, res) => {
    //console.log(req.body);
    //Agregar platillos
    let nuevoPlatillo = req.body;
    platillos.push(nuevoPlatillo);
    res.json({
        mensaje: "Se agregar platillos",
        data: nuevoPlatillo
    });
});
  


  app.put('/platillos(:id', (req, res) => {
    //Actualizar platillos
    let id = parseInt(req.params.id);
    let platillosResultado = platillos.find(platillo => 
        platillos.id === id);
    platillosResultado.nombre = req.body.nombre;
    platillosResultado.precio = req.body.precio;
    platillosResultado.descripcion = req.body.descripcion;
    res.send('Actualizar platillos');
  });



  app.delete('/platillos/:id', (req, res) => {
    //Borrar platillos
    let id = parseInt(req.params.id);
    const indice = platillos.findIndex(platillo => 
        platillo.id === id);
        platillos.splice(indice, 1);
        res.json({
            mensaje: "Se elimino platillos",
            data: null
        });
    });




// Inicio de servidor
  app.listen(port, () => {
    console.log('Servidor escuchando en http://localhost:' + port);
  });