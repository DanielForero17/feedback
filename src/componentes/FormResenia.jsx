import React from "react";
import Rating from "./Rating";
import { useState } from "react";


export const FormResenia = ({addResenia}) => {

    //estados para rating y texto
    const[rating , setRating]= useState(10)

    const[text , setText]= useState('')

    //METODO PARA CAMBIAR ESTADO DEL TEXTO
    const cambiarTexto = (e) => {
        setText(e.target.value)
    }

    //Metodo para controlar submit
    const controlSubmit = (e)=> {
        e.preventDefault()
            //Crear Un Objeto Resenia:
            let newResenia = {
                rating,
                text
            }
            //añadir la nueva reseña al arreglo
            addResenia(newResenia)


        console.log(newResenia)
        
    }





    return (
        <div className="card">
        <form onSubmit={(e)=>{ e.preventDefault(); console.log("HOLA MESSI") }}>
            <h2> Como calificarias el curso?</h2>
            <Rating
                setRating={setRating}
             />
            <div className="input-group">
            <input type="text"
            placeholder="Ingrese su comentario"
            onChange={cambiarTexto}/>

            <button type="submit">Registrar</button>

         </div>

        </form>
            </div>
    )
}
export default FormResenia;