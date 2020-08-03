import React, {useState} from 'react';
import TodoItem from "./TodoItem";
import state from "../../dataRedux/state";

const TodoList = props => {

    const [todoRow, setTodoRow] = useState(state.todoPage.todoList);

    const [todoTitle, setTodoTitle] = useState('');

    const addTodo = event =>{
        setTodoRow([
            ...todoRow,
            {
                title: todoTitle,
                completed: false
            }
        ]);
        setTodoTitle('')
    };

    const addTodoPress = event => {
        if (event.key === "Enter" && todoTitle !== '') {
            addTodo();
        }
    };

    const addTodoBtn =event=>{
        if(todoTitle !== ''){
            addTodo();
        }
    };

    return (
        <div className="todo-wrapper page-wrapper">

            <h2>Todo list</h2>

            <input
                type="text"
                value={todoTitle}
                onChange={event => {setTodoTitle(event.target.value)}}
                onKeyPress={addTodoPress}
            />
            <button
                onClick={addTodoBtn}
                className="btn btn-custom"
            >
                Add todo
            </button>

            <ul className="todo-list">
                {todoRow.map((tl, index) => (
                    <TodoItem
                        key={`TODO_LIST_ITEM_${index}`}
                        {...tl}/>
                ))}

            </ul>
        </div>
    )
};

export default TodoList;