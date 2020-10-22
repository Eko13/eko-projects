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
    <TodoList
      stateTodo={props.stateTodo}
      addNewTodo={onAddNewTodo}
      todoChange={onTodoChange}
      deleteItem={onDeleteItem}
    />
  )
};

export default TodoListContainer;
