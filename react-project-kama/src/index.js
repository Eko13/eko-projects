import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './dataRedux/store';

let renderEntireTreeIndex = (appState) =>{
  ReactDOM.render(
    <App
      appData={appState}
      dispatch={store.dispatch.bind(store)}
    />,
    document.getElementById("root")
  );
};

renderEntireTreeIndex(store.getState());


store.renderAppSubscribe(renderEntireTreeIndex);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
