import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

import './index.css';
import * as serviceWorker from './serviceWorker';

import store from './redux/reduxStore';

import App from "./app";

import {Provider} from 'react-redux';


    ReactDOM.render(
       <BrowserRouter>
           <Provider store={store}>
               {/*<App state={state} dispatch={store.dispatch.bind(store)}  store={store}/>*/}
               <App />
           </Provider>
       </BrowserRouter>, document.getElementById('root')
    );



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
