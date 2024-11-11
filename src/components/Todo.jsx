const Todo = ({ todo, deleteTodo, updateTodo,editarTodo }) => {
    const { id, titulo, descripcion, estado, priority } = todo;


    return (
        <div className="list-group-item">
            <div >
                <h5 className={estado ? "completada" : ""}>
                    {titulo} {priority && <span className="badge bg-danger">Prioritario</span>}
                </h5>
                <p>{descripcion}</p>
                <div className="d-flex">
                    <button
                        className="btn btn-sm btn-danger m-2"
                        onClick={() => deleteTodo(id)}

                    >
                        Eliminar
                    </button>
                    <button
                        className="btn btn-sm btn-warning m-2"
                        onClick={() => updateTodo(id)}
                        style={{
                            textDecoration: todo.completado ? 'line-through' : 'none',
                            color: todo.completado ? 'gray' : 'black',
                            textAlign: 'left'
                        }}
                    >
                        Actualizar
                    </button>
                    <button
                    className="btn btn-sm btn-danger m-2"
                    onClick={()=> editarTodo(id)}>
                        editar tarea
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Todo;
