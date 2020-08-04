let state = {
    profilePage: {
        rowsPostsList: [
            {id: 'cp1', name: 'Dima', age: '30', message: 'Lorem1', like: '123'},
            {id: 'cp2', name: 'Geema', age: '310', message: 'Lorem222', like: '32'},
            {id: 'cp3', name: 'Liqefewima', age: '320', message: 'Lorem33333', like: '123123'}
        ]
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
            {id: 'cd1', personName:'Luda', whoWrite:'you', message: 'Hi'},
            {id: 'cd2', personName:'Bek', whoWrite:'person',message: 'Hellow'},
            {id: 'cd3', personName:'Luda', whoWrite:'you', message: 'right'},
            {id: 'cd3', personName:'Luda', whoWrite:'you', message: 'right 2'},
            {id: 'cd4', personName:'Bek', whoWrite:'person',message: 'Hellow word'}
        ]
    },
    todoPage:{
        todoList:[
            {title:'Theme one', completed: false},
            {title:'Theme two', completed: false},
            {title:'Theme three', completed: true},
            {title:'Theme four', completed: false}
        ]
    },
    bestFriends:{
        rowBestFriends:[
            {id: 'bf1', personName:'Merch', avatarImage:'https://api.adorable.io/avatars/285/abott@adorable.io.png', },
            {id: 'bf2', personName:'Bek', avatarImage:'https://api.adorable.io/avatars/285/abott@adorable.io.png'},
            {id: 'bf3', personName:'Luda', avatarImage:'https://api.adorable.io/avatars/285/abott@adorable.io.png'},
            {id: 'bf4', personName:'Sureb', avatarImage:'https://api.adorable.io/avatars/285/abott@adorable.io.png'},
            {id: 'bf5', personName:'Kiben', avatarImage:'https://api.adorable.io/avatars/285/abott@adorable.io.png'}
        ]
    }


};

export default state;