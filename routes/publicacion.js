const express = require('express');
const router = express.Router();
const PublicacionController = require('../controllers/publicacion')

//Definir las rutas

router.get("/prueba-publicacion", PublicacionController.pruebaPublicacion);


//exportar router
module.exports = router;