import React from 'react';
import n from './post.module.css';

import Avatar from "../../../user/avatar/avatar";

const Post = (props) => {
    return (
        <div className={n.post}>
            <Avatar src={`${props.src}`} />

            <div className={n.post_title}>
                {props.text}
            </div>
        </div>
    );
}

export default Post;