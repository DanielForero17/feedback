import Resenia from "./Resenia"
const ReseniaList = ({ listaresenias }) => {

    return(
        //condicional en caso de que no llegue el arreglo//
        if(!listaresenias || listaresenias.legth === 0){
            return <p>No hay reseñas</p>
        }else{
            return(
                <div classNmae="feedback-list"
            )
        }



        
        <div className="feedbak-list">
            {/* Recorrer la listaresenias*/}
            { listaresenias.map((resenia)=>
            (
                <Resenia 
                key={resenia.id}
                resenia={resenia} />
            )}
                    
        </div>
    )



}

export default ReseniaList