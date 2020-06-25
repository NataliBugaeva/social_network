//это переменные для функции, которые возвращают объекты для dispatch
import {profileAPI} from "../api/api";

const UPDATE_POST_NEW_TEXT = 'UPDATE-POST-NEW-TEXT',
      ADD_NEW_POST = 'ADD-NEW-POST',
      SET_PROFILE = 'SET-PROFILE';

//переменная, содержит дефолтное значение для параметра state (передаем в state значение по умолчанию)
let initialState = {
    /*profileUserAvatar: 'https://img0.liveinternet.ru/images/attach/b/3/11/198/11198376_5832762_5212630_0000004974article.jpg',*/
    posts: [
        {
            id: 1,
            text: 'Hello! How are you?',
            src: 'https://trikky.ru/wp-content/blogs.dir/1/files/2019/07/17/images-1-1.jpg'
        },

        {
            id: 2,
            text: 'Look! It\'s my new photos!',
            src: 'https://avatarko.ru/img/avatar/11/zhivotnye_suslik_10489.jpg'
        },

        {
            id: 3,
            text: 'Photos 2019',
            src: 'https://avatarko.ru/img/avatar/11/zhivotnye_kot_shlyapa_pirat_10325.jpg'
        }
    ],
    postNewText: 'it-kamasutra',
    profile: null

};

/*const profilePageReducer = (state = initialState, action) => {
    //здесь не ставим break, потому что есть в каждом case return(полюбому выходим из switch)
    switch (action.type) {

        case ADD_NEW_POST: {
            let newPost = {
                id: 5,
                text: state.postNewText,
                src: 'https://avatarko.ru/img/avatar/11/zhivotnye_suslik_10489.jpg'
            };
             // создаем копию state - stateCopy
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];

            stateCopy.posts.push(newPost);
            stateCopy.postNewText = '';
            return stateCopy;
        }


        case UPDATE_POST_NEW_TEXT: {
            // создаем копию state - stateCopy
            let stateCopy = {...state};
            stateCopy.postNewText = action.newText;
            return stateCopy;
        }
        default: return state;
    }
};*/

//наша задача менять не сам state, а его копию. И возвращать потом эту измененную копию, поэтому рефакторим код следующим образом
//в каждом case делаем свою копию и возвращаем ее сразу же(все действия сразу в return)
//мы в возвращаемом объекте делаем сразу неглубокую копию, а потом перезаписываем свойства на нужные(изменяем их)
const profilePageReducer = (state = initialState, action) => {
    //здесь не ставим break, потому что есть в каждом case return(полюбому выходим из switch)
    switch (action.type) {

        case ADD_NEW_POST:
             let text = state.postNewText;

            return {
                ...state,
                posts: [...state.posts, {id: 5, text: text, src: 'https://avatarko.ru/img/avatar/11/zhivotnye_suslik_10489.jpg'}],
                postNewText: ''
            };

        case UPDATE_POST_NEW_TEXT:

            return {
                ...state,
                postNewText: action.newText
            };

        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

        default: return state;
    }
};

//эти функции возвращают сам объект action для dispatch. И при вызове dispatch в параметре мы вызываем эти функции
export const onPostChangeActionCreator = (text) => ({type: UPDATE_POST_NEW_TEXT, newText: text});
export const showNewPostActionCreator = () => ({type: ADD_NEW_POST});

export const setProfileActionCreator = (profile) => ({type: SET_PROFILE, profile: profile});

export const getProfileThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(response => {

            dispatch(setProfileActionCreator(response.data));
        });
    }
};

export default profilePageReducer;