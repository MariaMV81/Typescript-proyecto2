import { useState } from "react"
import { TaskList } from "./TaskList"

export const TodoApp = () => 
    {

        const [newTask, setNewTask] = useState<string>('')

        const [ListTaks, setListTasks] = useState<string[]>([])

        const handleAddTask = () => {//si esl imput esta vacio se va y si es distinto de vacio se agraga una nueva tarea y borra el index
            if(newTask.trim() === '') {
                return
            }
            setListTasks(tareasAnteriores => [...tareasAnteriores, newTask])
            setNewTask('')
        }

        const handleBorrarTarea = (index:number) => {//si le pasamos un indice este lo borrar y se me agregan todas las tareas que no correspondan a ese indice
            setListTasks(tareas=>tareas.filter((_, i) => i !== index))
            
        }

        return (
            <div>
                <h1>Lista de Tareas</h1>
                <div>
                    <input  //lo que escribamos en el input va a estar guardado e newTask
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Nueva Tarea"

                    />
                    <button onClick={handleAddTask}>Añadir Tarea</button>
                </div>
                <TaskList listaTareas={ListTaks} borrarTarea={handleBorrarTarea}></TaskList>
            </div>
        )
    }