import React, { useState } from 'react';

    const Buscador = ({ onBuscar }) => {
    const [filtro, setFiltro] = useState('');

    const handleChange = (e) => {
        setFiltro(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onBuscar(filtro);
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            className="form-control mb-3"
            placeholder="Buscar colaboradores..."
            value={filtro}
            onChange={handleChange}
            />
            <button type="submit">Buscar</button>
        </form>
        </div>
    );
    };

    export default Buscador;
