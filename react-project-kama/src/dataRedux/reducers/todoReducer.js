const ADD_NEW_TODO_ITEM = 'ADD_NEW_TODO_ITEM';
const UPDATE_NEW_TODO_ITEM = 'UPDATE_NEW_TODO_ITEM';
const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM';

const TodoReducer =(state, staticText , action) =>{

  if (action.type === ADD_NEW_TODO_ITEM) {
    let newTodoItem = {
      title: action.newTodoText,
      completed: false,
    };
    state.todoList.push(newTodoItem);
    staticText.todoStaticText = '';
  }
  else if (action.type === UPDATE_NEW_TODO_ITEM) {
    staticText.todoStaticText = action.updateText;
  }
  else if (action.type === DELETE_TODO_ITEM){
    state.todoList.splice(1);
  }

  return state;

};

export const addNewTodoItemActionCreator = (todoText) => {
  return {type: ADD_NEW_TODO_ITEM, newTodoText: todoText}
};

export const updateNewTodoItemActionCreator = (newTodoText) => {
  return {type: UPDATE_NEW_TODO_ITEM, updateText: newTodoText}
};

export const deleteTodoItemActionCreator = () =>{
  return {type: DELETE_TODO_ITEM}
};

export default TodoReducer;