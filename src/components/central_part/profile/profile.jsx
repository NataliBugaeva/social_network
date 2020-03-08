import React from 'react';


import Image from "./image/image";
import Posts from "./posts/posts";
import User from "./user/user";

const Profile = (props) => {

    return (
        <div>
            <Image />
            <User {...props} />
            <Posts />
        </div>
    );
};

export default Profile;