import { useState } from 'react'
import './App.css'
import Listado from './components/Listado'
import 'bootstrap/dist/css/bootstrap.min.css'
import Formulario from './components/Formulario'
import Alert from './components/Alert'
import { BaseColaboradores } from './components/BaseColaboradores';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alert, setAlert] = useState({ mensaje: '', tipo: '' });

  const agregarNuevoColaborador = (nuevoColaborador) => {
    if (
      !nuevoColaborador.nombre ||
      !nuevoColaborador.correo ||
      !nuevoColaborador.edad ||
      !nuevoColaborador.cargo ||
      !nuevoColaborador.telefono
    ) {
      setAlert({ mensaje: 'Por favor, completa todos los campos.', tipo: 'error' });
    } else {
      setColaboradores([...colaboradores, nuevoColaborador]);
      setAlert({ mensaje: 'Colaborador agregado exitosamente', tipo: 'success' });
    }
  };

  return (
    <>
      <div>
        <Alert mensaje={alert.mensaje} tipo={alert.tipo} />
        <Formulario agregarNuevoColaborador={agregarNuevoColaborador} />
        <Listado colaboradores={colaboradores} />
      </div>
    </>
  );
}

export default App;
