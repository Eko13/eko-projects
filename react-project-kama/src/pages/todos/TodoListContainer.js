import React, {useState} from 'react';
import {
  addNewTodoItemActionCreator,
  deleteTodoItemActionCreator,
  updateNewTodoItemActionCreator
} from '../../dataRedux/reducers/todoReducer';

import TodoList from './TodoList'

const TodoListContainer = props => {

  const onAddNewTodo = (todoText) => {
    // props.appStore.addNewTodoPoint(todoText);
    props.dispatch(addNewTodoItemActionCreator(todoText));
  };

  const onTodoChange = (changeTodoField) => {
    // props.appStore.updateNewTodoItem(newTodoText);
    props.dispatch(updateNewTodoItemActionCreator(changeTodoField));
  };

  const onDeleteItem = () =>{
    props.dispatch(deleteTodoItemActionCreator());
  };

  return (
    <div className="toDo-page__wrapper page__wrapper">
      <TodoList
        stateTodo={props.stateTodo}
        addNewTodo={onAddNewTodo}
        todoChange={onTodoChange}
        deleteItem={onDeleteItem}
      />
    </div>
  )
};

export default TodoListContainer;
