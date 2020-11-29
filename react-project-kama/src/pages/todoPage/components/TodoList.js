import React from 'react';
import TodoItem from "./TodoItem";
import {ButtonMain} from "../../../components/buttons/ButtonMain";

const TodoList = props => {

  const newTodoTitle = React.createRef();

  const addTodo = () => {
    let todoText = newTodoTitle.current.value;
    props.addNewTodo(todoText);
  };

  const onTodoChange = () => {
    let newTodoText = newTodoTitle.current.value;
    props.todoChange(newTodoText);
  };

  const addTodoOnButton = () => {
    if (props.stateTodo.todoFieldText !== '') {
      addTodo();
    }
  };

  const addTodoPress = event => {
    if (event.key === "Enter" && props.stateTodo.todoFieldText !== '') {
      addTodo();
    }
  };

  return (
    <>
      <h2 className="page__title">Todo list</h2>
      <div className="todo-page_form__wrapper">
        <input
          ref={newTodoTitle}
          type="text"
          value={props.stateTodo.todoFieldText}
          placeholder="Enter todo point"
          onChange={onTodoChange}
          onKeyPress={addTodoPress}
        />
        <div className="btn-actions__wrapper __end">
          <ButtonMain text="Add todo"
                      onClick={addTodoOnButton}
          />
        </div>
      </div>
      <div className="todo-page_list__wrapper">
        {props.stateTodo.rowTodoList.map((item, index) => (
          <TodoItem
            key={`TODO_LIST_ITEM_${index}`}
            {...item}
            dispatch={props.dispatch}
            deleteItem={props.deleteItem}
          />
        ))}
      </div>
    </>
  )
};

export default TodoList;
