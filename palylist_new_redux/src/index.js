import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducer from "./reducer";
import App from "./App"
let store = createStore(reducer);
// store.dispatch({
//     type:'ADD',
//     title:'今天',
//     singer:'你好'
// })

// console.log(store.getState())
// let id=store.getState().data[0].id;
// store.dispatch({
//     type:'REMOVE',
//     id:id
// })

// console.log(store.getState())


ReactDOM.render(
    <Provider store={store}>

        <App  mai="kerjer" />
    </Provider>
    , document.getElementById("root"))

