import {combineReducers, createStore} from "redux";

import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import asidePartReducer from "./asidePartReducer";

let reducers = combineReducers({
        profilePage: profilePageReducer,
        dialogsPage: dialogsPageReducer,
        asidePart: asidePartReducer
    });

let store = createStore(reducers);

window.store = store;

export default store;