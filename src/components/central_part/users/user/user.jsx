import React from "react";
import n from "./user.module.css";

import userImage from '../../../../images/User-icon.png';

import {NavLink} from "react-router-dom";
import * as axios from "axios";

const User = (props) => {

    const followUser = () => {
        let userId = props.id;

        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {},
        {
            withCredentials: true,
            headers: {
                "API-KEY": "438b43d8-c9fc-4009-a5e7-db75e710334c"
            }
        }).then( response => {

            if(response.data.resultCode === 0) {
                props.followUser(userId);
            }
        });
    };

    const unfollowUser = () => {
        let userId = props.id;

        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
                withCredentials: true,
            headers: {
                "API-KEY": "438b43d8-c9fc-4009-a5e7-db75e710334c"
            }
            }).then( response => {

            if(response.data.resultCode === 0) {
                props.unfollowUser(userId);
            }
        });
    };

    return (
        <div className={n.user}>
            <div className={n.user_foto}>

                <div className={n.foto}>
                    <NavLink to={'/profile/' + props.id}>
                        <img src={ (props.smallPhoto) ? props.smallPhoto : userImage }  alt=""/>
                    </NavLink>
                </div>
               {/*здесь вставила тернарный оператор для отображения нужной кнопки*/}
                { (!props.followed) ? <button onClick={followUser}>Follow</button> :
                                   <button onClick={unfollowUser}>Unfollow</button> }

            </div>

            <div className={n.user_info}>
                <div>
                    <p>
                        {props.name}
                    </p>
                    <p>
                        {"props.country"}
                    </p>
                </div>

                <div>
                    {"props.city"}
                </div>

                <div>
                    {props.status}
                </div>
            </div>
        </div>
    );
};

export default User;