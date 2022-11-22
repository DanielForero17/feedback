import {useState} from 'react';

const Resenia = ({ resenia }) => {

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
            <button onClick={cambiarNota}>
                Cambiar nota
            </button>

            <button onClick={restNota}>
                quitar nota
            </button>

        </div> 

    )
}

export default Resenia