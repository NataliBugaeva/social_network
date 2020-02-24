import React from 'react';


import Image from "./image/image";
import Posts from "./posts/posts";
import User from "./user/user";

const Profile = (props) => {
    return (
        <div>
            <Image />
            <User src="https://img0.liveinternet.ru/images/attach/b/3/11/198/11198376_5832762_5212630_0000004974article.jpg"/>
            {/*<Posts store={props.store} />*/}
            <Posts />
        </div>
    );
}

export default Profile;