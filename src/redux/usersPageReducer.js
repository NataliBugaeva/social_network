const FOLLOW = 'FOLLOW',
      UNFOLLOW = 'UNFOLLOW',
      SET_USERS = 'SET-USERS';

let initialState = {
    users: [
       /* {
            id: 1,
            name: 'Pit',
            location: {country: 'USA', city: 'Washington'},
            follow: false,
            src: 'https://www.schekino.net/forum/download/file.php?avatar=1758_1310800757.png',
            status: 'Looking for new job.'
        },

        {
            id: 2,
            name: 'Stive',
            location: {country: 'USA', city: 'Chicago'},
            follow: false,
            src: 'https://price-altai.ru/img/avatars/13688.gif',
            status: 'Looking for new friends.'
        },

        {
            id: 3,
            name: 'Jhon',
            location: {country: 'USA', city: 'New York'},
            follow: false,
            src: 'https://99px.ru/sstorage/1/2011/03/image_12303111114383936231.gif',
            status: 'Hey everybody!!!'
        }*/
    ]
}



const usersPageReducer = (state = initialState, action) => {

    switch(action.type) {
        case FOLLOW:

            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                        return user;

                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;

                })
            }
        //в action придут пользователи с сервака. мы сделаем копию с новыми пользователями
        //делаю копию state и перезатираю весь массив, который был в users
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users] }

        default: return state;

    }


};

export default usersPageReducer;

export const followActionCreator = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId: userId});
//это наш action, который будет возвращать нам даныые(наших юзеров с сервака)
export const setUsersActionCreator = (users) => ({type: SET_USERS, users: users});