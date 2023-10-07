import React, { useState } from "react";


const Formulario = ({agregarNuevoColab}) =>{
    const [nuevoColab, setNuevoColab]=useState({
        nombre:'',
        correo:'',
        edad:'',
        cargo:'',
        telefono:'',
    })
    const {nombre,correo,edad,cargo,telefono}= nuevoColab;

    const agregarColab = () =>{
        agregarNuevoColab(nuevoColab)
        setNuevoColab({
            nombre:'',
            correo:'',
            edad:'',
            cargo:'',
            telefono:'',
        })
    }


    const actualizarForm =(e) =>{
        const {name,value} = e.target
        setNuevoColab({...nuevoColab, [name]:value})
    }

    return(
        <div>
            <h1>Agrega un nuevo colaborador</h1>

            <form onSubmit={agregarColab} > 
                <div>
                    <label htmlFor="nombre" >Nombre: </label>
                    <input type="text"
                    name="nombre" 
                    value={nombre} 
                    onChange={actualizarForm}/> 
                </div>
                <div>
                    <label htmlFor="correo">Correo: </label>
                    <input type="email"
                    name="correo"
                    value={correo}
                    onChange={actualizarForm}
                    />
                </div>
                <div>
                    <label htmlFor="edad">Edad:</label>
                    <input type="number"
                    name="edad"
                    value={edad}
                    onChange={actualizarForm}
                    />
                </div>
                <div>
                    <label htmlFor="cargo">Cargo:</label>
                    <input type="text"
                    name="cargo"
                    value={cargo}
                    onChange={actualizarForm}
                    />
                </div>
                <div>
                    <label htmlFor="telefono">Telefono:</label>
                    <input type="tel"
                    name="telefono"
                    value={telefono}
                    onChange={actualizarForm}/>
                </div>
                <button type="submit">Agregar</button>
            </form>
        </div>
    )
}

export default Formulario