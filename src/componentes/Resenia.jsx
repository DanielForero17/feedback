import {useState} from 'react';
import {FaTimes} from "react-icons/fa"
const Resenia = ({ resenia, deleteResenia }) => {

    //Definir estados iniciales:
    const[rating , setRating ] = useState (10)
    const [comment, setComment ] = useState('Buen curso, faltan recursos')
      
    //cambiar el estado rating
    const cambiarNota = () =>{
        setRating((prev)=> {
            return prev + 1
        })
    }

    const restNota = () => {
        setRating((prev)=> {
            return prev - 1
    })
}


    return (
        <div className="card">
            <div className="num-display">
                { rating}
            </div>
            <div className="text-display">
                { comment }
            </div>
            <button onClick={ ()=> deleteResenia(resenia.id) } className="close">
               <FaTimes/>
            </button>

            <button className='close'>
                <FaTimes/>
            </button>

        </div> 

    )
}

export default Resenia