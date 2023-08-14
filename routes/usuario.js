const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuario')

//Definir las rutas

router.get("/prueba-usuario", UsuarioController.pruebaUsuario);


//exportar router
module.exports = router;