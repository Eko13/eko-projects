import React from 'react';
import TodoItem from "./TodoItem";


const TodoList = props =>{

    const todoRow = [{title:'Theme one'}, {title:'Theme Two'}];

    return(
        <div>
            <ul>
                <TodoItem todos={todoRow}/>
            </ul>
        </div>
    )
};

export default TodoList;