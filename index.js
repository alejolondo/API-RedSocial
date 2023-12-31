//Importar dependencias
const {connection} = require("./database/conexion")
const express = require("express")
const cors = require("cors")
//importar rutas
const PublicacionRoutes = require('./routes/publicacion');
const UsuarioRoutes = require('./routes/usuario');
const FollowRoutes = require('./routes/follow');

//Mensaje inicial 
console.log("API NODE para Red Social Inicializada")

// Conexion a la base de datos
connection();

// crear servidor de node
const app = express();
const port = 3900;

// configurar cors
app.use(cors());

// convertir los datos del body a objetos js
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// cargar conf rutas
app.use("/api", UsuarioRoutes);
app.use("/api", PublicacionRoutes);
app.use("/api", FollowRoutes);

// ruta de prueba
app.get('/ruta-prueba', (req, res)=>{
    return res.status(200).json(
        {
        "id": 1,
        "nombre": "Alejandro",
        "email": "alejolondo02@gmail.com"
    }
    );
})

// poner servidor a escuchar peticiones
app.listen(port, ()=> {
    console.log("Servidor corriendo en el puerto", port)
})