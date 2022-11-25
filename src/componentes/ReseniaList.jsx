
import Resenia from "./Resenia"

const ReseniaList = ( { listaresenias, deleteResenia } ) => {

            //condicional en caso de que no llegue el arreglo//
            if(!listaresenias || listaresenias.legth === 0){
                return  <p>No hay reseñas</p>
            }else{
                return (
                <div className="feedbak-list" >
                { listaresenias.map((resenia)=>
                (
                <Resenia 
                deleteResenia={deleteResenia}
                key={resenia.id} 
                resenia={resenia} />
                )
                )
                }
                </div>
                
            )
                    
                    
        }
                  
    }             

export default ReseniaList; 