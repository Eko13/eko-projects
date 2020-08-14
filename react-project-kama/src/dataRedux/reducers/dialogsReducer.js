const ADD_NEW_DIALOG_MESSAGE = 'ADD_NEW_DIALOG_MESSAGE';
const UPDATE_NEW_DIALOG_MESSAGE = 'UPDATE_NEW_DIALOG_MESSAGE';

const DialogsReducer =(state, staticText , action) =>{

  const RandomId = () =>{
    return Math.floor(Math.random() * 101);
  };

  if(action.type === ADD_NEW_DIALOG_MESSAGE){
    let newDialogMessage = {
      id: `${RandomId()}`,
      personName: 'Luda',
      whoWrite: 'you',
      message: staticText.dialogStaticText,
      timeSend: 1,
    };
    state.rowsChatDialogs.push(newDialogMessage);
    staticText.dialogStaticText = '';
  }
  else if (action.type === UPDATE_NEW_DIALOG_MESSAGE){
    staticText.dialogStaticText = action.newMessageText;
  }

  return state;

};

export const addNewMessageTextCreator = () =>{
  return {type: ADD_NEW_DIALOG_MESSAGE}
};

export const updateNewMessageTextCreator = (messageText) =>{
  return {type: UPDATE_NEW_DIALOG_MESSAGE, newMessageText: messageText}
};



export default DialogsReducer;