const express = require('express');
const router = express.Router();
const FollowController = require('../controllers/follow')

//Definir las rutas

router.get("/prueba-follow", FollowController.pruebaFollow);


//exportar router
module.exports = router;