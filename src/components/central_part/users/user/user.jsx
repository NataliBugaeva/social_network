import React from "react";
import n from "./user.module.css";

import userImage from '../../../../images/User-icon.png';

const User = (props) => {

    const followUser = () => {
        let userId = props.id;
        props.followUser(userId);
    };

    const unfollowUser = () => {
        let userId = props.id;
        props.unfollowUser(userId);
    };

    return (
        <div className={n.user}>
            <div className={n.user_foto}>
                <div className={n.foto}><img src={ (props.smallPhoto) ? props.smallPhoto : userImage }  alt=""/></div>
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