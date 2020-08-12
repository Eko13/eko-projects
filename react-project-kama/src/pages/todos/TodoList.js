import React, {useState} from 'react';
import TodoItem from "./TodoItem";
import {addNewTodoItemActionCreator, updateNewTodoItemActionCreator} from '../../dataRedux/store';


const TodoList = props => {

  const [todoRow, setTodoRow] = useState(props.stateTodo.todoList);

  const newTodoTitle = React.createRef();

  const addTodo = () => {
    let todoText = newTodoTitle.current.value;
    // props.appStore.addNewTodoPoint(todoText);
    props.dispatch(addNewTodoItemActionCreator(todoText));
  };

  const onTodoChange = () => {
    let newTodoText = newTodoTitle.current.value;
    // props.appStore.updateNewTodoItem(newTodoText);
    props.dispatch(updateNewTodoItemActionCreator(newTodoText));
  };

  const addTodoOnButton = () => {
    if (props.staticText.todoStaticText !== '') {
      addTodo();
    }
  };

  const addTodoPress = event => {
    if (event.key === "Enter" && props.staticText.todoStaticText !== '') {
      addTodo();
    }
  };

  return (
    <div className="todo-wrapper page-wrapper">

      <h2>Todo list</h2>

      <input
        ref={newTodoTitle}
        type="text"
        value={props.staticText.todoStaticText}
        placeholder="Enter todo point"
        onChange={onTodoChange}
        onKeyPress={addTodoPress}
      />
      <button
        onClick={addTodoOnButton}
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