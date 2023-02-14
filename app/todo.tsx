"use client";
import React, { useState } from "react";

export default function Todo() {
    const [todo, setTodo] =useState("")
    const [todos, setTodos] = useState([
        {todoText: "Gym", completed: true},
        {todoText: "Breakfast", completed: true},
        {todoText: "Office Meeting", completed: true},
        {todoText: "Lunch", completed: false},
        {todoText: "Zoom Meeting", completed: false}
    ]);
    const onClickHandler = (meraElm: any) => {
        console.log('meraElm', meraElm);
        const newTodos = todos.map((todo) =>{
            console.log("todo: ", todo);
            if (todo.todoText == meraElm.todoText){
                todo.completed = !todo.completed
            }
            return todo;
        }); 
        console.log(newTodos);
        setTodos(newTodos);
        setTodo("");
    }
    const addTodo = () =>{
        const newTodo = { todoText: todo , completed: false}
        const newTodos = [...todos, newTodo]
        setTodos(newTodos);
    }
    const deleteTodo = (meraTodo: any) =>{
        const newTodos = todos.filter(todo=>{
            if (todo.todoText == meraTodo.todoText)
                return false
            return true
        });
        console.log("old todos", todos, "new todos", newTodos);
        setTodos(newTodos);
    }
    return (
        <>
            <div>Todo</div>
            <input 
                placeholder="Add todo text" 
                value={todo} 
                onChange={(e)=> {
                    setTodo(e.target.value);
                }}
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((elm) => {
                    return (
                    
                    <li
                    style={{
                        color: elm.completed ? "green" : "orange",
                        fontStyle: "oblique",
                        listStyle: "none",
                    }} 
                    key={elm.todoText}
                    >
                        <input 
                            type= "checkbox" 
                            checked={elm.completed} 
                            onClick={()=>{
                                onClickHandler(elm);
                            }} 
                        />
                        {elm.todoText}
                        <button onClick={()=>{deleteTodo(elm)}}>
                            Delete
                        </button>
                    </li>
                    );
                })}
            </ul>
        </>
    );
}