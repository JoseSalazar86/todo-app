import './App.css';
import Todos from "./components/Todos.jsx";
import { useEffect, useState } from "react";
import Formulario from "./components/Formulario.jsx";
import Todo from "./components/Todo.jsx";

const inicializarEstados = JSON.parse(localStorage.getItem("todos")) || [];

function App() {
    const [todos, setTodos] = useState(inicializarEstados);
    const [editarTodo, setEditarTodo] = useState(null);

    const addTodo = (todo) => {
        if (editarTodo) {
            const updateTodos = todos.map(t => t.id === editarTodo.id ? { ...todo, id: editarTodo.id } : t);
            setTodos(updateTodos);
            setEditarTodo(null); // Limpiar la tarea en edición
        } else {
            setTodos([...todos, { ...todo, id: Date.now() }]);
        }
    };

    const deleteTodo = id => {
        const newArray = todos.filter(todo => todo.id !== id);
        setTodos(newArray);
    };

    const updateTodo = id => {
        const newArray = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, estado: !todo.estado }; // Cambia el estado
            }
            return todo;
        });
        setTodos(newArray); // Actualiza el estado
    };

    const editTodo = (id) => {
        const todoToEdit = todos.find(todo => todo.id === id);
        setEditarTodo(todoToEdit);
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div>
            <h1>Formulario de Tareas</h1>
            <Formulario addTodo={addTodo} editarTodo={editarTodo} /> {/* Pasa editarTodo como prop */}
            <Todos todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} editTodo={editTodo} />
        </div>
    );
}
export default App