import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import state from './dataRedux/state';
import {addNewPost, updateNewPost} from './dataRedux/state';


export let renderEntireTree = () =>{
  ReactDOM.render(
    <App
      appState={state}
      addNewPost={addNewPost}
      updatePostText={updateNewPost}
    />,
    document.getElementById("root")
  );
};


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
