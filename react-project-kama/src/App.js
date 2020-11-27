import React from 'react';
import './assets/styles/App.css';
import './assets/styles/App.sass';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import HomePage from './pages/home';
import Dialogs from "./pages/dialogs";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import TodoListContainer from "./pages/todos/TodoListContainer";

const App = props => {

  return (
    <Router>
      <div className="main__wrapper">
        <Sidebar/>

        <Header/>

        <div className="content__wrapper">

          <Route
            path="/home"
            render={() =>
              <HomePage
                appData={props.appData}
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path="/dialogs"
            render={() =>
              <Dialogs
                stateDialogs={props.appData.messagesPage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path="/todo"
            render={() =>
              <TodoListContainer
                stateTodo={props.appData.todoPage}
                dispatch={props.dispatch}
              />
            }
          />

        </div>
      </div>
    </Router>
  )
};

export default App;
