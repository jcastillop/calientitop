import React, { useState } from 'react';
import Item from './item';
import TodoForm from './todoForm';

const Todo = () => {

    const initialState = [
        {
            text: 'Learn hooks',
            iscompleted: false
        },
        {
            text: 'Get the JS Book',
            iscompleted: false
        },
        {
            text: 'Learn Javascript',
            iscompleted: false
        }
    ];
    /*
    const resultArray = useState(initialState);
    const todos = resultArray[0];
    const newTodos = resultArray[1];
    */
    const [todos, setTodos] = useState(initialState);
    console.log(todos);
    const addTodos=(text)=>{
        const newTodos = [...todos, {text: text, iscompleted: false}];
        setTodos (newTodos);
    }
    const handleRemoveClick = (index)=>{
        //Get all todos array from state
        const newTodos = [ ...todos ];
        //removing clicked item
        newTodos.splice(index, 1);
        //set state with new array todos
        setTodos(newTodos);
    }

    const handleItemClick = (index)=>{
        const newTodos = [ ...todos ];
        //set isCompleted to reverse
        newTodos[index].iscompleted =! newTodos[index].iscompleted;
        setTodos(newTodos);
    }

    return(
        <div className="todo-container">
            <h2 className="main-heading">Todo App</h2>
            <TodoForm 
                addTodos = {addTodos} 
                />
            <div>
                { todos.length ? (
                    todos.map( (item, index) => (
                        <Item
                            key ={ `${item.text}-${index}` } 
                            todo = { item } 
                            index = { index } 
                            handleRemoveClick = { handleRemoveClick } 
                            handleItemClick = { handleItemClick }
                        ></Item>
                    ))
                ) : '' }
            </div>
        </div>
    );
}

export default Todo;