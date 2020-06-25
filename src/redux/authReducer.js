import {headerAPI} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data, //здесь будут сдеть три параметра: id, email, login
                isAuth: true
            };

        default: return state;
    }
};

export const setAuthUserDataActionCreator = (id, login, email) => ({type: SET_USER_DATA, data: {id: id, login: login, email: email}});

export const authMeThunkCreator = () => {
    return (dispatch) => {

        headerAPI.authMe().then(data => {

            if(data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserDataActionCreator(id, login, email));
            }
        })

    }
};

export default authReducer;