var express = require('express');
var router = express.Router();

//variables mias
var activo;
var codigoDoc;

/* GET users listing. */
router.post('/', function(req, res) {
    res.status(201).send('temperatura:'+req.body.temperatura+"\n"+    
            'humedad: '+req.body.humedad);
    // res.send("si jala");
});

//este metodo get sirve para decir que cierto ticket esta activo 
//para registrar informacion del sensor
//lo que hace es devolver informacion del ticket, y las registra en las
//varibles que estan arriba
router.post('/enviar', function(req, res) {
    
});


module.exports = router;