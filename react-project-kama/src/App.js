 import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Header from "./components/segments/header/Header";
import Sidebar from "./components/segments/sidebar/Sidebar";
import HomePage from './pages/homePage/HomePage';
import Dialogs from "./pages/dialogsPage/DialogsPage";
import TodoPage from "./pages/todoPage/TodoPage";
import HooksPage from "./pages/hooksPage/HooksPage";
import {MainBanner} from "./components/segments/banner/MainBanner";

const App = (props) => {

  return (
    <Router>
      <div className="main__wrapper">
        <MainBanner/>
        <Sidebar/>
        <Header/>

        <div className="content__wrapper">
          <div className="content__inner-wrapper">
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
            <Route path="/todo"
              render={
                () => <TodoPage
                  stateTodo={props.appData.todoPage}
                  dispatch={props.dispatch}
                />
              }
            />
            <Route
              path="/hooks"
              render={() => <HooksPage/> }
            />
          </div>

        </div>
      </div>
    </Router>
  )
};

export default App;
