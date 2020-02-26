import React from 'react';

import n from './users.module.css';

import User from "./user/user";
//импортируем все, что есть в этой библиотеке. и ко всему будем обращаться через имя axios
import * as axios from 'axios';

const Users = (props) => {
/*
    if (props.allUsers.length === 0) {
        props.setUsers(
           [ {
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
            }]
        );
    }*/


    const getUsers = () => {
        //теперь будем брать юзеров с сервера с помощью get запроса и библиотеки axios
        if (props.allUsers.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {

                props.setUsers(response.data.items);

            });
        }
    }

    //передаем через пропсы дальше в компоненту user.jsx все нужные коллбэки, которые нам сюда передала контейнерная компонента usersContainer
    let allUsers = props.allUsers.map( (elem) => <User followUser={props.followUser} unfollowUser={props.unfollowUser} setUsers={props.setUsers}
                                                        id={elem.id} followed={elem.followed} name={elem.name}  status={elem.status}
                                                         smallPhoto={elem.photos.small} largePhoto={elem.photos.large}/> );

    return (
        <div className={n.users}>
            <h2>Users</h2>

            <button onClick={getUsers} className={n.button_get_users}>Get users</button>

            <div className={n.users_list}>

                {allUsers}

            </div>

        </div>
    );
}

export default Users;