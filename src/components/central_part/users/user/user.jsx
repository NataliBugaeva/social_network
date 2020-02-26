import React from "react";
import n from "./user.module.css";

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
                <div className={n.foto}><img src={props.src} alt=""/></div>
               {/*здесь вставила тернарный оператор для отображения нужной кнопки*/}
                { (!props.follow) ? <button onClick={followUser}>Follow</button> :
                                   <button onClick={unfollowUser}>Unfollow</button> }

            </div>

            <div className={n.user_info}>
                <div>
                    <p>
                        {props.name}
                    </p>
                    <p>
                        {props.country}
                    </p>
                </div>

                <div>
                    {props.city}
                </div>

                <div>
                    {props.status}
                </div>
            </div>
        </div>
    );
};

export default User;