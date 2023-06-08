var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res) {
//   res.status(201).send('temperatura:'+req.body.temperatura+"\n"+    
//             'humedad: '+req.body.humedad);
    res.send("si jala");
});

module.exports = router;