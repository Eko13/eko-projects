import React from 'react';
import './App.css';
import './App.sass';

import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

import HomePage from './pages/home';
import Dialogs from "./pages/dialogs";
import News from "./pages/news";
import Music from "./pages/music";
import Settings from "./pages/settings";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import TodoList from "./pages/todos/TodoList";
import {addNewPost} from "./dataRedux/state";

const App = props => {


    return (
        <Router>
            <div className="App">
                <div className="main-wrapper">
                    <div className="sidebar-wrapper">
                        <Sidebar/>
                    </div>
                    <div className="content-wrapper">
                        <Header/>

                        <Route
                            path="/home"
                            render={() =>
                                <HomePage
                                  stateProfilePage={props.appState.profilePage}
                                  addNewPost={props.addNewPost}
                                  updatePostText={props.updatePostText}
                                />
                            }
                        />
                        <Route
                            path="/dialogs"
                            render={() =>
                                <Dialogs
                                    stateDialogs={props.appState.messagesPage}
                                />
                            }
                        />
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>
                        <Route
                          path="/todo"
                          render={
                              ()=> <TodoList
                                        stateTodo={props.appState.todoPage}
                                    />
                          }
                        />

                    </div>
                </div>
            </div>
        </Router>

    )

};

export default App;