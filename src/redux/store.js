import profilePageReducer from './profilePageReducer';
import dialogsPageReducer from "./dialogsPageReducer";
import asidePartReducer from "./asidePartReducer";

let store = {

    _state:  {
        profilePage: {
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
            postNewText: 'it-kamasutra'

        },
        dialogsPage: {
            messages: [
                {
                    id: 1,
                    text: 'Hellow! How are you doing?',
                    name: 'Matvey'
                },

                {
                    id: 2,
                    text: 'Hey! Nice to meet you?',
                    name: 'Vika'
                },

                {
                    id: 3,
                    text: 'I\'am fine, thanks, you?',
                    name: 'Denis'
                }
            ],
            dialogs: [
                {
                    id: 1,
                    name: 'Vasya'
                },

                {
                    id: 2,
                    name: 'Kostya'
                },

                {
                    id: 3,
                    name: 'Vika'
                }
            ],
            newMessageBody: ''
        },
        asidePart: {
            friends: [
                {
                    id: 1,
                    path: 'https://avatarko.ru/img/avatar/1/Gomer_s_oruzhiem.jpg',
                    name: 'Matvey'
                },

                {
                    id: 2,
                    path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQibcAdq6Z9KzKUcn7afMSDJl4ovJ0ES025k81bkmjS6nh8m_zg&s',
                    name: 'Aleksey'
                },

                {
                    id: 3,
                    path: 'https://community.mybb.com/uploads/avatars/avatar_102178.jpg?dateline=1458074895',
                    name: 'Gosha'
                }
            ]
        }
    },
    //это мы переименовали наш локальный rerender() и сделали его приватным
    _callSubscriber()  {
        console.log('state has been changed');
    },

    //создаем геттер для получения получения state извне (так как state теперь приватное свойство)
    getState() {
      return this._state;
    },
    //создали функцию, которую будем импортировать в index.js, чтоб взять себе оттуда rerender и присвоить его в _callSubscriber
    subscribe(observer)  {
        this._callSubscriber = observer;
    },


    dispatch(action) {

        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
        this._state.asidePart = asidePartReducer(this._state.asidePart, action);

        this._callSubscriber(this._state);
    }

};

/*//эти функции возвращают сам объект action для dispatch. И при вызове dispatch в параметре мы вызываем эти функции
export const onPostChangeActionCreator = (text) => ({type: UPDATE_POST_NEW_TEXT, newText: text});
export const showNewPostActionCreator = () => ({type: ADD_NEW_POST});

export const updateMessageBodyActionCreator = (message) => ({type: UPDATE_MESSAGE_BODY_ACTION_CREATOR, newMessage: message});
export const addNewMessageBodyActionCreator = () => ({type: ADD_NEW_MESSAGE_BODY_ACTION_CREATOR});*/

window.state = store.getState();

export default store;