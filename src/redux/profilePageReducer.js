//это переменные для функции, которые возвращают объекты для dispatch
const UPDATE_POST_NEW_TEXT = 'UPDATE-POST-NEW-TEXT',
      ADD_NEW_POST = 'ADD-NEW-POST';

//переменная, содержит дефолтное значение для параметра state (передаем в state значение по умолчанию)
let initialState = {
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

};

const profilePageReducer = (state = initialState, action) => {
    //здесь не ставим break, потому что есть в каждом case return(полюбому выходим из switch)
    switch (action.type) {

        case ADD_NEW_POST:
            let newPost = {
                id: 5,
                text: state.postNewText,
                src: 'https://avatarko.ru/img/avatar/11/zhivotnye_suslik_10489.jpg'
            };

            state.posts.push(newPost);
            state.postNewText = '';
            return state;

        case UPDATE_POST_NEW_TEXT:
            state.postNewText = action.newText;
            return state;

        default: return state;
    }
};

//эти функции возвращают сам объект action для dispatch. И при вызове dispatch в параметре мы вызываем эти функции
export const onPostChangeActionCreator = (text) => ({type: UPDATE_POST_NEW_TEXT, newText: text});
export const showNewPostActionCreator = () => ({type: ADD_NEW_POST});

export default profilePageReducer;