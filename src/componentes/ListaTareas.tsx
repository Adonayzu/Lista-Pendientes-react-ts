import {Tarea} from "./Tarea"

type ListaTareas = {
    listaTareas: string[]
    borrarTarea: (index:number) => void
}

export const ListaTareas = ({listaTareas, borrarTarea}: ListaTareas) => {
  return (
    <div className='taskList'>
        {listaTareas.map((tarea,index) => ( // trae los datos de otro lado el map
            <Tarea key={index} tarea={tarea} borrarTarea={() => borrarTarea(index)}></Tarea> // aqui agrego los datos que treigo de tarea



        )
        )}
        
    </div>
  )
}