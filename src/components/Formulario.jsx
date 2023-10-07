import React, { useState } from 'react';

    const Formulario = ({ agregarNuevoColaborador }) => {
    const [nuevoColaborador, setNuevoColaborador] = useState({
        nombre: '',
        correo: '',
        edad: '',
        cargo: '',
        telefono: '',
    });

    const { nombre, correo, edad, cargo, telefono } = nuevoColaborador;

    const actualizarForm = (e) => {
        const { name, value } = e.target;
        setNuevoColaborador({ ...nuevoColaborador, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        agregarNuevoColaborador(nuevoColaborador);
        setNuevoColaborador({
        nombre: '',
        correo: '',
        edad: '',
        cargo: '',
        telefono: '',
        });
    };

    return (
        <div>
        <h2>Agregar un nuevo colaborador</h2>
        <form onSubmit={handleSubmit}>
            <div >
            <label htmlFor="nombre" >
                Nombre:
            </label>
            <input
                type="text"
                name="nombre"
                className="form-control"
                value={nombre}
                onChange={actualizarForm}
                required
            />
            </div>
            <div >
            <label htmlFor="correo" >
                Correo:
            </label>
            <input
                type="email"
                name="correo"
                className="form-control"
                value={correo}
                onChange={actualizarForm}
                required
            />
            </div>
            <div >
            <label htmlFor="edad" >
                Edad:
            </label>
            <input
                type="number"
                name="edad"
                className="form-control"
                value={edad}
                onChange={actualizarForm}
                required
            />
            </div>
            <div >
            <label htmlFor="cargo" >
                Cargo:
            </label>
            <input
                type="text"
                name="cargo"
                className="form-control"
                value={cargo}
                onChange={actualizarForm}
                required
            />
            </div>
            <div >
            <label htmlFor="telefono" >
                Teléfono:
            </label>
            <input
                type="tel"
                name="telefono"
                className="form-control mb-3"
                value={telefono}
                onChange={actualizarForm}
                required
            />
            </div>
            <button type="submit" className="btn btn-primary mb-3">
            Agregar
            </button>
        </form>
        </div>
    );
    };

    export default Formulario;
