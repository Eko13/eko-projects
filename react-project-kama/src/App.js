import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Header from "./components/segments/header/Header";
import Sidebar from "./components/segments/sidebar/Sidebar";
import Footer from "./components/segments/footer/Footer";
import HomePage from './pages/homePage/HomePage';
import Dialogs from "./pages/dialogsPage/DialogsPage";
import TodoPage from "./pages/todoPage/TodoPage";
import {MainBanner} from "./components/segments/banner/MainBanner";

const App = (props) => {

  return (
    <Router>
      <div className="main__wrapper">
        <MainBanner />
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
              <TodoPage
                stateTodo={props.appData.todoPage}
                dispatch={props.dispatch}
              />
            }
          />
        </div>

        <Footer />
      </div>
    </Router>
  )
};

export default App;
