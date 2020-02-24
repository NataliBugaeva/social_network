//переменная, содержит дефолтное значение для параметра state (передаем в state значение по умолчанию)
let initialState = {
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
};

const asidePartReducer = (state = initialState, action) => {

    return state;
};

export default asidePartReducer;