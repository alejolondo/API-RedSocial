// acciones de prueba 

const pruebaUsuario = (req, res) => {
    return res.status(200).send({
        message: "Mensaje enviado desde el controlador: controller/usuario.js"
    });
}




// Exportar acciones
module.exports  = {
    pruebaUsuario
}