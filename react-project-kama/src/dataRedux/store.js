import state from './state';

let renderEntireTree = () =>{
  console.log('Render state in state')
};

let store = {

  storeSomeText:'Hi man im from STORE',
  showAlert(){
    alert(this.storeSomeText);
  },

  addNewPost(newMessageText){
    let newPostItem = {
      id: 'cp5',
      name: 'Lipo',
      age: 89,
      message: newMessageText,
      like: 3
    };
    state.profilePage.rowsPostsList.push(newPostItem);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
  },

  updateNewPost(updateText){
    state.profilePage.newPostText = updateText;
    renderEntireTree(state);
  },

  renderAppSubscribe(observer){
    renderEntireTree = observer;
  },

};


export default store;