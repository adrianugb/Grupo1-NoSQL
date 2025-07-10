
//Declaraciones de variables la palabra const es para crear variables unicas
//require es una analogia de importar una libreria
const express = require('express');
//mongoose aca usa todas las funciones
const mongoose = require('mongoose');
//Formateo de los datos
const bodyParse = require('body-parser');

const RouterCurso = require('./routers/CursoRourtes');
<<<<<<< Updated upstream
const RouterEstudiantes = require('./routers/EstudiantesRourtes');
=======
const RouterAdministrador = require('./routers/AdministradoresRouters');


>>>>>>> Stashed changes
//asginas rutas
//variables para el https o web
const cors = require('cors');

//se hace una instancia para que app sea el express
const app = express();
const PORT = 3000;


//Conexion hacia mongodb 
mongoose.connect('mongodb://127.0.0.1:27017/academias',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//Middlewares el router del htpp
app.use(cors());
app.use(bodyParse.json());



//Rutas del api
app.use('/api/cursos', RouterCurso)
<<<<<<< Updated upstream
app.use('/api/estudiantes', RouterEstudiantes)
=======
app.use('/api/administradores', RouterAdministrador);

>>>>>>> Stashed changes

//Ocupamos el servidor funcional
app.listen(PORT, ()=> {
        //version old
        //console.log('Servidor corriendo http://localhost:'+PORT);
        //version new
        console.log(`Servidor corriendo http://localhost:${PORT}`);

    }
)

//()=> esto es igual a crear una funcion en js
// function saludar(){
//     return "hola";
// }
//()=>{
//     return "hola";
// }