import {combineReducers, createStore} from "redux";

import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import asidePartReducer from "./asidePartReducer";
import usersPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
        profilePage: profilePageReducer,
        dialogsPage: dialogsPageReducer,
        usersPage: usersPageReducer,
        asidePart: asidePartReducer,
        auth: authReducer
    });

let store = createStore(reducers);

window.store = store;

export default store;