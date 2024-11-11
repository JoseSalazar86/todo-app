import PropTypes from "prop-types";
import Todo from "./Todo.jsx";

const Todos = ({ todos, deleteTodo, updateTodo, editTodo }) => {
    return (
        <div>
            <h2>Lista de tareas</h2>
            <ul className="list-group">
                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        updateTodo={updateTodo}
                        editTodo = {editTodo}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Todos;
