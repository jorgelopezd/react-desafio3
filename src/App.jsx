
import { useState } from 'react'
import './App.css'
import { BaseColaboradores } from './components/BaseColaboradores'
import Listado from './components/Listado'
import 'bootstrap/dist/css/bootstrap.min.css'
import Formulario from './components/Formulario'


function App() {
  const [colaboradores, setColaboradores] = useState([])

  const agregarNuevoColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador])
  }
  return (
    <>
      <div>
      <Formulario agregarNuevoColaborador={agregarNuevoColaborador} />
      <Listado colaboradores={colaboradores} />
      </div>
    </>
  )
}

export default App
