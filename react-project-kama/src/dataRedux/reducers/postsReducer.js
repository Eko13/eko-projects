const ADD_NEW_POST = 'ADD_NEW_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST';

let initialState = {
  rowsPostsList: [
    {id: 'cp1', name: 'Dima 1', age: 25, message: 'Lorem1', like: 12},
    {id: 'cp2', name: 'Geema 2', age: 26, message: 'Lorem222', like: 123},
    {id: 'cp3', name: 'Histl 3', age: 27, message: 'Lorem333333', like: 1234}
  ],
  postFieldText: 'Static Post text 123',
};

const PostReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_NEW_POST:
      let newPostItem = {
        id: 'cp5',
        name: 'Lipo',
        age: 89,
        message: state.postFieldText,
        like: 3
      };
      state.rowsPostsList.push(newPostItem);
      state.postFieldText = '';
      return state;

    case UPDATE_NEW_POST:
      state.postFieldText = action.updateText;
      return state;

    default:
      return state;
  }

};

export const addNewPostActionCreator = (postText) => {
  return {type: ADD_NEW_POST, newPostMessage: postText}
};

export const updateNewPostActionCreator = (changeNewText) => {
  return {type: UPDATE_NEW_POST, updateText: changeNewText}
};

export default PostReducer;
