type TareaProps = {
    tarea: string
    borrarTarea: () => void


}


export const Task = ({tarea, borrarTarea}: TareaProps) => {

    return (
        <div className="task">
            <span>{tarea}</span>
            <button onClick={borrarTarea}>X</button>
            
        </div>
    )
}