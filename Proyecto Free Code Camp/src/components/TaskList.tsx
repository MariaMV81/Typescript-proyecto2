import { Task } from "./Task"

type ListaTareas = {
    listaTareas: string[]
    borrarTarea: (index: number) => void


}


export const TaskList = ({listaTareas, borrarTarea}: ListaTareas) => {

    return (
        <div className="taskList">
            {listaTareas.map((tarea, index) => (
            <Task key={index} tarea={tarea} borrarTarea={()=> borrarTarea(index)}></Task>
            )
            )}
        </div>
    )
}