import { useState } from 'react'

const Rating = ({setRating}) => {

  //estado para la nota
  const[nota, setNata] = useState(10)

  const cambiarNota = (e) =>{
    setNata( +e.currentTarget.value)
    setRating( +e.currentTarget.value)
  }

  return (
    <ul className="rating">
        {[1,2,3,4,5,6,7,8,9,10].map((numero) => (

      <li key={numero}> 
        <input 
          id={numero}
          value={numero}
          type="radio"
          name="rating" 
          onChange={cambiarNota}
          checked={numero === nota} />
        <label htmlFor={numero}>{numero}🥵</label>
      </li> 
      )) }

    </ul>
  )
}

export default Rating
