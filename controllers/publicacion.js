// acciones de prueba 

const pruebaPublicacion = (req, res) => {
    return res.status(200).send({
        message: "Mensaje enviado desde el controlador: controller/publicacion.js"
    });
}


// Exportar acciones
module.exports  = {
    pruebaPublicacion
}