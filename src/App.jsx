
import './App.css'
import { BaseColaboradores } from './components/BaseColaboradores'
import Listado from './components/Listado'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const colaboradores = BaseColaboradores
  return (
    <>
      <div>
      <Listado colaboradores={colaboradores} />
      </div>
    </>
  )
}

export default App
