//это переменные для функции, которые возвращают объекты для dispatch
const UPDATE_MESSAGE_BODY_ACTION_CREATOR = 'UPDATE-MESSAGE-BODY-ACTION-CREATOR',
      ADD_NEW_MESSAGE_BODY_ACTION_CREATOR = 'ADD-NEW-MESSAGE-BODY-ACTION-CREATOR';

//переменная, содержит дефолтное значение для параметра state (передаем в state значение по умолчанию)
let initialState = {
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
};

const dialogsPageReducer = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_MESSAGE_BODY_ACTION_CREATOR:
            state.newMessageBody = action.newMessage;
            return state;

        case ADD_NEW_MESSAGE_BODY_ACTION_CREATOR:
            let messageBody = state.newMessageBody;
            state.messages.push({id: 6, text: messageBody, name: 'User' });
            state.newMessageBody = '';
            return state;

        default: return state;
    }
};

//эти функции возвращают сам объект action для dispatch. И при вызове dispatch в параметре мы вызываем эти функции
export const updateMessageBodyActionCreator = (message) => ({type: UPDATE_MESSAGE_BODY_ACTION_CREATOR, newMessage: message});
export const addNewMessageBodyActionCreator = () => ({type: ADD_NEW_MESSAGE_BODY_ACTION_CREATOR});

export default dialogsPageReducer;