
let state = {
  seeText: 'seeText in state',
  profilePage: {
    rowsPostsList: [
      {id: 'cp1', name: 'Dima', age: 25, message: 'Lorem1', like: 12},
      {id: 'cp2', name: 'Geema', age: 26, message: 'Lorem222', like: 123},
      {id: 'cp3', name: 'Histl', age: 27, message: 'Lorem333333', like: 1234}
    ],
    newPostText:'Post static text',
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
      {id: 'cd1', personName: 'Luda', whoWrite: 'you', message: 'Hi'},
      {id: 'cd2', personName: 'Bek', whoWrite: 'person', message: 'Hellow'},
      {id: 'cd3', personName: 'Luda', whoWrite: 'you', message: 'right'},
      {id: 'cd3', personName: 'Luda', whoWrite: 'you', message: 'right 2'},
      {id: 'cd4', personName: 'Bek', whoWrite: 'person', message: 'Hellow word'}
    ]
  },
  todoPage: {
    todoList: [
      {title: 'Theme one', completed: false},
      {title: 'Theme two', completed: false},
      {title: 'Theme three', completed: true},
      {title: 'Theme four', completed: false}
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
};

window.stateOne = state;

// export const addNewPost = (newMessageText) => {
//     let newPostItem = {
//         id: 'cp5',
//         name: 'Lipo',
//         age: 89,
//         message: newMessageText,
//         like: 3
//     };
//     state.profilePage.rowsPostsList.push(newPostItem);
//     state.profilePage.newPostText = '';
//     renderEntireTree(state);
// };

// export const updateNewPost = (updateText) => {
//     state.profilePage.newPostText = updateText;
//     renderEntireTree(state);
// };

// export const renderAppSubscribe = (observer) =>{
//   renderEntireTree = observer;
// };


export default state;