import React, { useState } from "react";
import "./App.css";
import Listado from "./components/Listado";
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/Formulario";
import Alert from "./components/Alert";
import Buscador from "./components/Buscador";
import { BaseColaboradores } from "./components/BaseColaboradores";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alert, setAlert] = useState({ mensaje: "", tipo: "" });
  const [filtro, setFiltro] = useState("");

  const agregarNuevoColaborador = (nuevoColaborador) => {
    if (
      !nuevoColaborador.nombre ||
      !nuevoColaborador.correo ||
      !nuevoColaborador.edad ||
      !nuevoColaborador.cargo ||
      !nuevoColaborador.telefono
    ) {
      setAlert({
        mensaje: "Por favor, completa todos los campos.",
        tipo: "error",
      });
    } else {
      const nuevoID = colaboradores.length + 1;
      const colaboradorConID = { id: nuevoID.toString(), ...nuevoColaborador };

      setColaboradores([...colaboradores, colaboradorConID]);
      setAlert({
        mensaje: "Colaborador agregado exitosamente",
        tipo: "success",
      });
    }
  };

  const buscarColaboradores = (filtro) => {
    setFiltro(filtro);
  };

  const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
    return (
      colaborador.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
      colaborador.correo.toLowerCase().includes(filtro.toLowerCase()) ||
      colaborador.cargo.toLowerCase().includes(filtro.toLowerCase()) ||
      colaborador.telefono.toLowerCase().includes(filtro.toLowerCase())
    );
  });

  return (
    <>
      <div className="container">

        <div className="row">
          <div className="">
            <Buscador onBuscar={buscarColaboradores} />
        <Listado colaboradores={colaboradoresFiltrados} />
          </div>
          <div className="col-md-6">
            <Formulario agregarNuevoColaborador={agregarNuevoColaborador} />
          </div>
        </div>
        <Alert mensaje={alert.mensaje} tipo={alert.tipo} />
      </div>
    </>
  );
}

export default App;
