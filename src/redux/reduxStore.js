import {combineReducers, createStore} from "redux";

import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import asidePartReducer from "./asidePartReducer";
import usersPageReducer from "./usersPageReducer";

let reducers = combineReducers({
        profilePage: profilePageReducer,
        dialogsPage: dialogsPageReducer,
        usersPage: usersPageReducer,
        asidePart: asidePartReducer
    });

let store = createStore(reducers);

window.store = store;

export default store;