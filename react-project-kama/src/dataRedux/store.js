import PostReducer  from './reducers/postsReducer';
import TodoReducer from "./reducers/todoReducer";
import DialogsReducer from "./reducers/dialogsReducer";

const SHOW_ALERT = 'SHOW_ALERT';


let store = {

  _state: {
    seeText: 'seeText in state',
    staticText: {
      todoStaticText: 'Static Todo text',
      postStaticText: 'Static Post text',
      dialogStaticText: 'Chat static text',
      alertStaticText: "Hi man, I'm from STORE/staticText/alertStaticText",
    },
    profilePage: {
      rowsPostsList: [
        {id: 'cp1', name: 'Dima', age: 25, message: 'Lorem1', like: 12},
        {id: 'cp2', name: 'Geema', age: 26, message: 'Lorem222', like: 123},
        {id: 'cp3', name: 'Histl', age: 27, message: 'Lorem333333', like: 1234}
      ],
      newPostText: 'Post static text',
    },
    messagesPage: {
      rowsListDialogs: [
        {id: 'ld1', name: 'Dima'},
        {id: 'ld2', name: 'Sema'},
        {id: 'ld3', name: 'Lita'},
        {id: 'ld4', name: 'NAVA'},
        {id: 'ld5', name: 'Siky'}
      ],
      rowsChatDialogs: [
        {id: 'cd1', personName: 'Luda', whoWrite: 'you', message: 'Hi', timeSend: 12334},
        {id: 'cd2', personName: 'Bek', whoWrite: 'person', message: 'Hellow', timeSend: 12452434},
        {id: 'cd3', personName: 'Luda', whoWrite: 'you', message: 'right', timeSend: 127434},
        {id: 'cd4', personName: 'Luda', whoWrite: 'you', message: 'right 2', timeSend: 92434},
        {id: 'cd5', personName: 'Bek', whoWrite: 'person', message: 'Hellow word', timeSend: 19359432}
      ],
    },
    todoPage: {
      todoList: [
        {id: 1,title: 'Theme one', completed: false},
        {id: 2,title: 'Theme two', completed: false},
        {id: 3,title: 'Theme three', completed: true},
        {id: 4,title: 'Theme four', completed: false}
      ]
    },
    bestFriends: {
      rowBestFriends: [
        {id: 'bf1', personName: 'Merch', avatarImage: 'https://api.adorable.io/avatars/285/abott@adorable.io.png',},
        {id: 'bf2', personName: 'Bek', avatarImage: 'https://api.adorable.io/avatars/285/abott@adorable.io.png'},
        {id: 'bf3', personName: 'Luda', avatarImage: 'https://api.adorable.io/avatars/285/abott@adorable.io.png'},
        {id: 'bf4', personName: 'Sureb', avatarImage: 'https://api.adorable.io/avatars/285/abott@adorable.io.png'},
        {id: 'bf5', personName: 'Kiben', avatarImage: 'https://api.adorable.io/avatars/285/abott@adorable.io.png'}
      ]
    }
  },

  _renderEntireTree() {
    console.log('Render state in state')
  },

  getState() {
    return this._state;
  },

  renderAppSubscribe(observer) {
    this._renderEntireTree = observer;
  },

  // showAlert() {
  //   alert(this.getState().staticText.alertStaticText);
  // },


  dispatch(action) {

    this._state.profilePage = PostReducer(this._state.profilePage, this._state.staticText, action);

    this._state.todoPage = TodoReducer(this._state.todoPage, this._state.staticText, action);

    this._state.messagesPage = DialogsReducer(this._state.messagesPage, this._state.staticText, action);

    this._renderEntireTree(this._state);

    // if (action.type === ADD_NEW_DIALOG_MESSAGE){
    //   let newDialogMessage ={
    //     id: this.randomIdByTime() + 2,
    //     personName: 'Luda',
    //     whoWrite: 'you',
    //     message: this._state.staticText.dialogStaticText,
    //     timeSend: this.randomIdByTime(),
    //   };
    //   this._state.messagesPage.rowsChatDialogs.push(newDialogMessage);
    //   this._state.staticText.dialogStaticText = '';
    //   this._renderEntireTree(this._state);
    // }
    // else if (action.type === UPDATE_NEW_DIALOG_MESSAGE){
    //   this._state.staticText.dialogStaticText = action.updateText;
    //   this._renderEntireTree(this._state);
    // }
    // else if (action.type === SHOW_ALERT) {
    //   alert(this._state.staticText.alertStaticText);
    //   // alert('broken text, must be refactoring');
    // }

  },

};

export const showAlertActionType = () => ({type: 'SHOW_ALERT'}); //и так можно ретёрнить

export default store;

window.statebest = store._state;