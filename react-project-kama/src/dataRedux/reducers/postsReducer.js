const ADD_NEW_POST = 'ADD_NEW_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST';

const PostReducer =(state, staticText , action) =>{

  if (action.type === ADD_NEW_POST) {
    let newPostItem = {
      id: 'cp5',
      name: 'Lipo',
      age: 89,
      message: 'action.newPostMessage',
      like: 3
    };
    state.rowsPostsList.push(newPostItem);
    staticText.postStaticText = '';
  }
  else if (action.type === UPDATE_NEW_POST) {
    staticText.postStaticText = action.updateText;
  }

  return state;

};

export const addNewPostActionCreator = (postText) => {
  return {type: ADD_NEW_POST, newPostMessage: postText}
};

export const updateNewPostActionCreator = (changeNewText) => {
  return {type: UPDATE_NEW_POST, updateText: changeNewText}
};

export default PostReducer;