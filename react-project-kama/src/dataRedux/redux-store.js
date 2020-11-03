import {combineReducers, createStore} from "redux";
import PostReducer      from "./reducers/postsReducer";
import TodoReducer      from "./reducers/todoReducer";
import DialogsReducer   from "./reducers/dialogsReducer";

let reducers = combineReducers({
  profilePage:    PostReducer,
  todoPage:       TodoReducer,
  messagesPage:   DialogsReducer,
});


let store = createStore(reducers);

export default store;
