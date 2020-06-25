import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW',
      UNFOLLOW = 'UNFOLLOW',
      SET_USERS = 'SET-USERS',
      SET_SELECTED_PAGE = 'SET-SELECTED-PAGE',
      SET_TOTAL_USERS_AMOUNT = 'SET-TOTAL-USERS-AMOUNT',
      SET_PRELOADER = 'SET-PRELOADER',
      TOGGLE_IS_FOLLOWIN_PROGRESS = 'TOGGLE-IS-FOLLOWIN-PROGRESS';

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
    ],
    usersAmount: 0,
    pageSize: 50,
    pageSelected: 1,
    isFetching: true,
    followingInProgress: [] //этим будем дизейблить кнопку "подписаться\отписаться"
};



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
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;

                })
            };
        //в action придут пользователи с сервака. мы сделаем копию с новыми пользователями
        //делаю копию state и перезатираю весь массив, который был в users
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            };
        //после того, как придут данные с сервака, мы запускаем эту ф-цию и она делает копию State сновыми данными
        case SET_TOTAL_USERS_AMOUNT:
            return {
                ...state,
                usersAmount: action.totalUsersAmount
            };

        case SET_SELECTED_PAGE:
            return {
                ...state,
                pageSelected: action.pageSelected
            };

        case SET_PRELOADER:
            return {
                ...state,
                isFetching: action.isFetching
            };

        case TOGGLE_IS_FOLLOWIN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };

        default: return state;

    }


};

export default usersPageReducer;

/*export const followActionCreator = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId: userId});
//это наш action, который будет возвращать нам даныые(наших юзеров с сервака)
export const setUsersActionCreator = (users) => ({type: SET_USERS, users: users});

export const setTotalUsersAmountActionCreator = (totalUsersAmount) => ({type: SET_TOTAL_USERS_AMOUNT, totalUsersAmount: totalUsersAmount});
export const setSelectedPageActionCreator = (pageSelected) => ({type: SET_SELECTED_PAGE, pageSelected: pageSelected });

export const setPreloaderActionCreator = (isFetching) => ({type: SET_PRELOADER, isFetching: isFetching});*/

export const follow = (userId) => ({type: FOLLOW, userId: userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId: userId});
//это наш action, который будет возвращать нам даныые(наших юзеров с сервака)
export const setUsers = (users) => ({type: SET_USERS, users: users});

export const setTotalUsersAmount = (totalUsersAmount) => ({type: SET_TOTAL_USERS_AMOUNT, totalUsersAmount: totalUsersAmount});
export const setSelectedPage = (pageSelected) => ({type: SET_SELECTED_PAGE, pageSelected: pageSelected });

export const setPreloader = (isFetching) => ({type: SET_PRELOADER, isFetching: isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWIN_PROGRESS, isFetching, userId});



export const getUsersThunkCreator = (pageSelected, pageSize) => {
    return (dispatch) => {

        dispatch(setPreloader(true));
        usersAPI.getUsers(pageSelected, pageSize).then(data => {
            //передала сюда юзеров и общее их количество из ответа сервака
            dispatch(setPreloader(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersAmount(data.totalCount));
        });
    }
};

export const changePageThunkCreator = (event, pageSize) => {
    return (dispatch) => {

        dispatch(setPreloader(true));
        let target = event.target;
        if (target.tagName === 'SPAN') {
            dispatch(setSelectedPage(+target.innerText));
        }

        usersAPI.getUsers(+target.innerText, pageSize).then(data => {
            dispatch(setPreloader(false));
            //передала сюда юзеров и общее их количество из ответа сервака
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersAmount(data.totalCount));
        });
    }
};

export const followUserThunkCreator = (userId) => (dispatch) => {

    dispatch(toggleFollowingProgress(true, userId));

    usersAPI.followUser(userId)
    /*axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {},
    {
        withCredentials: true,
        headers: {
            "API-KEY": "438b43d8-c9fc-4009-a5e7-db75e710334c"
        }
    })*/.then( response => {

        if(response.data.resultCode === 0) {
            dispatch(follow(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
    });
};

export const unfollowUserThunkCreator = (userId) => (dispatch) => {

    dispatch(toggleFollowingProgress(true, userId));

    usersAPI.unfollowUser(userId)
    /*axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
            withCredentials: true,
        headers: {
            "API-KEY": "438b43d8-c9fc-4009-a5e7-db75e710334c"
        }
        })*/
        .then( response => {

            if(response.data.resultCode === 0) {
                dispatch(unfollow(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        });
};