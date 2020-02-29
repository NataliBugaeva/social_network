import React from 'react';

import n from './users.module.css';

import User from "./user/user";
//импортируем все, что есть в этой библиотеке. и ко всему будем обращаться через имя axios
import * as axios from 'axios';

/*const Users = (props) => {
/!*
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
    }*!/


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
}*/

class Users extends React.Component {


    constructor(props) {
        super(props);

    }



    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageSelected}&count=${this.props.pageSize}`).then(response => {

            //передала сюда юзеров и общее их количество из ответа сервака
            /*this.props.setUsers(response.data.items, response.data.totalCount);*/
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersAmount(response.data.totalCount);

        });

    }

    //методы пишем как стрелочные функции, чтобы сохранить контекст вызова
    //переключает странички наши
    //по клику выцепит номер страницы, перекл.чит на новую страницу, в соответсвии с этим номером сделает запрос на сервак, чтоб тот отрисовал нам пользователей для этогой страницы
    click = (event) => {
        let target = event.target;
        if (target.tagName === 'SPAN') {
            this.props.setSelectedPage(+target.innerText);
        }

         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${+target.innerText}&count=${this.props.pageSize}`).then(response => {

             //передала сюда юзеров и общее их количество из ответа сервака
             this.props.setUsers(response.data.items);
             this.props.setTotalUsersAmount(response.data.totalCount);

         });
    }

    /*     getUsers = () => {
            //теперь будем брать юзеров с сервера с помощью get запроса и библиотеки axios
            if (this.props.allUsers.length === 0) {
                axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {

                    this.props.setUsers(response.data.items);

                });
            }
        }*/



    render() {

            //вычислила количество страниц
            let pagesCount = Math.ceil(this.props.totalUsersAmount / this.props.pageSize);
            let pagesArr = [];

            //запихнули в массив начиная с 1цы по очерерди все наши страницы [1,2,3,4,5,...]
            for (let i=1; i <= pagesCount; i++) {
                pagesArr.push(i);
            }
            //наш массив с номерами страниц, каждый обернут в спан. Именно его мы будем отрисовывать в разметке в return
            //Здесь же присваиваем спану класс selected, если номер страницы соввпадает со свойствои selectedPage в нашем state
            let pagesNumbers = pagesArr.map( elem => <span className={ this.props.pageSelected === elem ? n.selected : ''}>{elem}</span> );


        return (
            <div className={n.users}>
                <h2>Users</h2>
               {/*//повесила событие клика на весь div(использовала делегирование)*/}
               <div  onClick={this.click} className={n.pages}> {pagesNumbers}</div>

                <button className={n.button_get_users}>Get users</button>


                <div className={n.users_list}>
                    {/*возвратила разметку таким образом, потому что она у меня через переменную не пошла(не отрисовалась)
                    т.е когда я переменную засунула в свойства, а здесь ее отрисовывала*/}
                    { this.props.allUsers.map( (elem) => <User followUser={this.props.followUser} unfollowUser={this.props.unfollowUser}
                                                               setUsers={this.props.setUsers} id={elem.id} followed={elem.followed}
                                                               name={elem.name}  status={elem.status}
                                                               smallPhoto={elem.photos.small} largePhoto={elem.photos.large}/> )}


                </div>

            </div>
        )
    }
}

export default Users;