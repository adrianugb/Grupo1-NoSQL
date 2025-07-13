
const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');

const RouterCurso = require('./routers/CursoRourtes');
const RouterEstudiantes = require('./routers/EstudiantesRourtes');
const RouterTutores = require('./routers/TutoresRourters');
const RouterAdministradores = require('./routers/AdministradoresRouters');
const RouterProfesores = require('./routers/ProfesoresRourtes');

const cors = require('cors');
const app = express();
const PORT = 3000;
mongoose.connect('mongodb://127.0.0.1:27017/proyecto',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.use(cors());
app.use(bodyParse.json());

//rutas
app.use('/api/cursos', RouterCurso)
app.use('/api/estudiantes', RouterEstudiantes)
app.use('/api/tutores', RouterTutores)
app.use('/api/administradores', RouterAdministradores)
app.use('/api/profesores', RouterProfesores)
app.listen(PORT, ()=> {
       console.log(`Servidor corriendo http://localhost:${PORT}`);

    }
)