import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{task: "sample-task", id: uuidv4(), isDone: false}]); //li list update
    let [newTodo, setNewTodo] = useState(""); //input update changes

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, {task: newTodo, id: uuidv4(), isDone: false}];
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    let markDone = (id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isDone: true };
                }
                return todo;
            })
        );
    };

    return (
        <div>
            <input placeholder="Add A Task" value={newTodo} onChange={updateTodoValue}></input>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>
            <h4>Todo App</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={todo.isDone ? { textDecoration: "line-through" } : {}}>
                            {todo.task}
                            
                        </span>
                        
                        &nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>delete</button>
                        &nbsp;
                        <button onClick={() => markDone(todo.id)}>mark done</button>
                        ✔️
                    </li>
                      
                ))}
            </ul>
        </div>
    )
}
