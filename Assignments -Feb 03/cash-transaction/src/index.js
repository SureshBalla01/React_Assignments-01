import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from "./reducer";
import App from './App'



let store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



const rootElement = document.getElementById("root");
ReactDOM.render(
<Provider store={store}>
    <App />
    </Provider>, 
    rootElement);