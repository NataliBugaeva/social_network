import React from "react";
import n from './users.module.css';

import User from "./user/user";
import Preloader from "../../common/preloader/preloader";

const UsersFuncComponent = (props) => {

    //вычислила количество страниц
    let pagesCount = Math.ceil(props.totalUsersAmount / props.pageSize);
    let pagesArr = [];

    //запихнули в массив начиная с 1цы по очерерди все наши страницы [1,2,3,4,5,...]
    for (let i=1; i <= pagesCount; i++) {
        pagesArr.push(i);
    }
    //наш массив с номерами страниц, каждый обернут в спан. Именно его мы будем отрисовывать в разметке в return
    //Здесь же присваиваем спану класс selected, если номер страницы соввпадает со свойствои selectedPage в нашем state
    let pagesNumbers = pagesArr.map( elem => <span className={ props.pageSelected === elem ? n.selected : ''}>{elem}</span> );


    return(
        <div className={n.users}>
            <h2>Users</h2>
            {/*//повесила событие клика на весь div(использовала делегирование)*/}
            <div  onClick={props.pageChange} className={n.pages}> {pagesNumbers} </div>


             {/*если isFetching: true, то мы подгруаем наш прелоадер как компоненту*/}
            {props.isFetching ? <Preloader /> : null}
            {/*<img src={ props.isFetching ? preloader : ''} alt=""/>*/}

            <div className={n.users_list}>
                {/*возвратила разметку таким образом, потому что она у меня через переменную не пошла(не отрисовалась)
                    т.е когда я переменную засунула в свойства, а здесь ее отрисовывала*/}
                { props.allUsers.map( (elem) => <User followUser={props.followUser} unfollowUser={props.unfollowUser}
                                                      toggleFollowingProgress={props.toggleFollowingProgress}
                                                      setUsers={props.setUsers} id={elem.id} followed={elem.followed}
                                                      name={elem.name}  status={elem.status}
                                                      smallPhoto={elem.photos.small} largePhoto={elem.photos.large}
                                                      followingInProgress={props.followingInProgress}
                                                      followSuccess={props.followSuccess} unfollowSuccess={props.unfollowSuccess}/>)}

            </div>

        </div>
    )
};

export default UsersFuncComponent;