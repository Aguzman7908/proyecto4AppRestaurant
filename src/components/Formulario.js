import React from "react";
import { useState} from "react";

import {db} from '../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';




function Formulario () {
    const [formData, setFormData] = useState( {
        nombre: "",
        email:""
    }) // Aqui va el valor por defecto que tomara el estado al cargar el componente
    
    function onChange(evento){
        const input = evento.target
        setFormData({
            ...formData,
            [input.id]:input.value
        })
        
    }
    /* este es codigo bueno
    const getData = async() => {
        const snapshot = await getDocs(collection(db,'reservaciones'))
        console.log(snapshot.docs.map((doc) => doc.data()))
    }
*/
//let valor = {nombre:'primo', email:'primo@gmail.com'}
//let inputNombre = document.getElementById('nombre').value
const createDoc = async() => {
    await addDoc (collection(db,'reservaciones'),formData)
    
}

    function onClick () {
        
    }

    //console.log(formData)

    return (
        <div>
            <h1 id="reservacion">Registra tu Reservacion</h1>
            <label>Nombre:</label>
            <input className="cuadrotexto" id="nombre" name="name" onChange={onChange} value={formData.nombre}></input><br></br><br></br><br></br>
            <label>Email:</label>
            <input class="cuadrotexto" id="email" name="email" onChange={onChange} value={formData.email}></input><br></br><br></br><br></br>
            <button onClick={createDoc}>Registrar</button><br></br><br></br>
                            
        </div>
    )
}

export default Formulario;