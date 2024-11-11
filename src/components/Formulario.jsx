import { useEffect, useState } from 'react';
import Swal from "sweetalert2";

const Formulario = ({ addTodo, editarTodo }) => {
    const [todo, setTodo] = useState({
        titulo: "",
        descripcion: "",
        estado: "pendiente",
        priority: false
    });

    // useEffect para cargar los datos de la tarea a editar, si existe
    useEffect(() => {
        if (editarTodo) {
            setTodo(editarTodo);
        } else {
            setTodo({
                titulo: "",
                descripcion: "",
                estado: "pendiente",
                priority: false
            });
        }
    }, [editarTodo]); // Dependencia de editarTodo

    const handleSubmit = (e) => {
        e.preventDefault();
        const { titulo, descripcion } = todo;

        if (!titulo.trim() || !descripcion.trim()) {
            return Swal.fire({
                icon: "warning",
                title: "Oops",
                text: "Título y descripción son obligatorios"
            });
        }

        // Llamamos a addTodo para agregar o editar la tarea
        addTodo(todo);
        setTodo({
            titulo: "",
            descripcion: "",
            estado: "pendiente",
            priority: false
        });
    };

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setTodo({
            ...todo,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    return (
        <div className="container">
            <h1>{editarTodo ? "Editar Tarea" : "Nuevo Formulario de Tarea"}</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="titulo" className="form-label">Título</label>
                    <input type="text" className="form-control" id="titulo" name="titulo" value={todo.titulo} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">Descripción</label>
                    <input type="text" className="form-control" id="descripcion" name="descripcion" value={todo.descripcion} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="estado" className="form-label">Estado</label>
                    <select className="form-select" id="estado" name="estado" value={todo.estado} onChange={handleChange}>
                        <option value="pendiente">Pendiente</option>
                        <option value="completada">Completada</option>
                    </select>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="priority" name="priority" checked={todo.priority} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="priority">Prioridad</label>
                </div>
                <button type="submit" className="btn btn-primary">
                    {editarTodo ? "Actualizar Tarea" : "Guardar"}
                </button>
            </form>
        </div>
    );
};

export default Formulario;

