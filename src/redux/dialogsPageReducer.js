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


/*const dialogsPageReducer = (state = initialState, action) => {
    //наша задача менять не сам state, а его копию. И возвращать потом эту измененную копию, поэтому рефакторим код следующим образом
    let stateCopy = {
        ...state,
        messages: [...state.messages]
    };

    switch (action.type) {

        case UPDATE_MESSAGE_BODY_ACTION_CREATOR: {

            stateCopy.newMessageBody = action.newMessage;
            return stateCopy;
        }

        case ADD_NEW_MESSAGE_BODY_ACTION_CREATOR: {

            let messageBody = stateCopy.newMessageBody;
            stateCopy.messages.push({id: 6, text: messageBody, name: 'User'});
            stateCopy.newMessageBody = '';
            return stateCopy;
        }

        default: return state;
    }
};*/

//наша задача менять не сам state, а его копию. И возвращать потом эту измененную копию, поэтому рефакторим код следующим образом
//в каждом case делаем свою копию и возвращаем ее сразу же(все действия сразу в return)
//мы в возвращаемом объекте делаем сразу неглубокую копию, а потом перезаписываем свойства на нужные(изменяем их)
const dialogsPageReducer = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_MESSAGE_BODY_ACTION_CREATOR:

            return {
                ...state,
                newMessageBody: action.newMessage
            };

        case ADD_NEW_MESSAGE_BODY_ACTION_CREATOR:
            let messageBody = state.newMessageBody;

            return {
                ...state,
                messages: [...state.messages, {id: 6, text: messageBody, name: 'User'}],
                newMessageBody: ''
            };

        default: return state;
    }
};

//эти функции возвращают сам объект action для dispatch. И при вызове dispatch в параметре мы вызываем эти функции
export const updateMessageBodyActionCreator = (message) => ({type: UPDATE_MESSAGE_BODY_ACTION_CREATOR, newMessage: message});
export const addNewMessageBodyActionCreator = () => ({type: ADD_NEW_MESSAGE_BODY_ACTION_CREATOR});

export default dialogsPageReducer;