const ADD_NEW_TODO_ITEM = 'ADD_NEW_TODO_ITEM';
const UPDATE_NEW_TODO_ITEM = 'UPDATE_NEW_TODO_ITEM';
const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM';

let initialState = {
  rowTodoList: [
    {id: 1, title: 'Theme one 1', completed: false},
    {id: 2, title: 'Theme two 2', completed: false},
    {id: 3, title: 'Theme three 3', completed: true},
    {id: 4, title: 'Theme four 4', completed: false}
  ],
  todoFieldText: 'Todo placeholder 123'
};

const TodoReducer = (state = initialState, action) => {

  const randomIdByTime = () => {
    let date = new Date();
    return date.getTime();
  };

  if (action.type === ADD_NEW_TODO_ITEM) {
    let newTodoItem = {
      id: randomIdByTime(),
      title: action.newTodoText,
      completed: false,
    };
    state.rowTodoList.push(newTodoItem);
    state.todoFieldText = '';
  } else if (action.type === UPDATE_NEW_TODO_ITEM) {
    state.todoFieldText = action.updateText;
  } else if (action.type === DELETE_TODO_ITEM) {
    alert('fix it')
  }

  return state;

};

export const addNewTodoItemActionCreator = (todoText) => {
  return {type: ADD_NEW_TODO_ITEM, newTodoText: todoText}
};

export const updateNewTodoItemActionCreator = (newTodoText) => {
  return {type: UPDATE_NEW_TODO_ITEM, updateText: newTodoText}
};

export const deleteTodoItemActionCreator = () => {
  return {type: DELETE_TODO_ITEM}
};

export default TodoReducer;