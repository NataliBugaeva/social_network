import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

import './index.css';
import * as serviceWorker from './serviceWorker';

import store from './redux/reduxStore';

import App from "./app";

/*import {Provider} from "./storeContext";*/

import {Provider} from 'react-redux';


//в rerender в параметр надо передеть state, но так как это приватное свойство, мы в параметре вызовем из store метод getState


let rerender = () => {
    ReactDOM.render(
       <BrowserRouter>
           <Provider store={store}>
               {/*<App state={state} dispatch={store.dispatch.bind(store)}  store={store}/>*/}
               <App />
           </Provider>
       </BrowserRouter>, document.getElementById('root')
    );
};

rerender();

store.subscribe( () => {
    rerender();
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
