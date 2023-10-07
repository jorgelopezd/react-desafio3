import React from "react"

const Listado = ({ colaboradores  }) => {
    return (
        <div>
            <h1>Listado de Colaboradores</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Edad</th>
                        <th>Cargo</th>
                        <th>Telefono</th>
                    </tr>
                </thead>

                <tbody>
                    {colaboradores.map((colaborador) => {
                        const { id, nombre, correo, edad, cargo, telefono } = colaborador;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{nombre}</td>
                                <td>{correo}</td>
                                <td>{edad}</td>
                                <td>{cargo}</td>
                                <td>{telefono}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Listado