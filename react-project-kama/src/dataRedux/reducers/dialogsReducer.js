const ADD_NEW_DIALOG_MESSAGE = 'ADD_NEW_DIALOG_MESSAGE';
const UPDATE_NEW_DIALOG_MESSAGE = 'UPDATE_NEW_DIALOG_MESSAGE';

let initialState = {
  rowsListDialogs: [
    {id: 'ld1', name: 'Dima Redux'},
    {id: 'ld2', name: 'Sema Redux'},
    {id: 'ld3', name: 'LitaRedux '},
    {id: 'ld4', name: 'NAVA Redux'},
    {id: 'ld5', name: 'Redux Siky'}
  ],
  rowsChatDialogs: [
    {id: 'cd1', personName: 'Luda', whoWrite: 'you', message: 'Hi', timeSend: 12334},
    {id: 'cd2', personName: 'Bek', whoWrite: 'person', message: 'Hellow', timeSend: 12452434},
    {id: 'cd3', personName: 'Luda', whoWrite: 'you', message: 'right', timeSend: 127434},
    {id: 'cd4', personName: 'Luda', whoWrite: 'you', message: 'right 2', timeSend: 92434},
    {id: 'cd5', personName: 'Bek', whoWrite: 'person', message: 'Hellow word', timeSend: 19359432}
  ],
  chatFieldText: 'static text in chat'
};

const DialogsReducer = (state = initialState, action) => {

  const RandomId = () => {
    return Math.floor(Math.random() * 101);
  };

  switch (action.type) {
    case ADD_NEW_DIALOG_MESSAGE:
      let newDialogMessage = {
        id: `${RandomId()}`,
        personName: 'Luda',
        whoWrite: 'you',
        message: state.chatFieldText,
        timeSend: 1,
      };
      state.rowsChatDialogs.push(newDialogMessage);
      state.chatFieldText = '';
      return state;

    case UPDATE_NEW_DIALOG_MESSAGE:
      state.chatFieldText = action.newMessageText;
      return state;

    default :
      return state;

  }

};

export const addNewMessageTextCreator = () => {
  return {type: ADD_NEW_DIALOG_MESSAGE}
};

export const updateNewMessageTextCreator = (messageText) => {
  return {type: UPDATE_NEW_DIALOG_MESSAGE, newMessageText: messageText}
};


export default DialogsReducer;


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