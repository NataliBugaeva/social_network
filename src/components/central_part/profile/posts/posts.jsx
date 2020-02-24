import React from 'react';
import n from './posts.module.css';

import PostsNewContainer from "./posts_new/postsNewContainer";
import PostsAvailable from "./posts_available/postsAvailable";

const Posts = (props) => {
    return (
        <div className={n.posts}>
            {/*<PostsNewContainer store={props.store}/>
            <PostsAvailable store={props.store}/>*/}

            <PostsNewContainer />
            <PostsAvailable />
        </div>
    );
}

export default Posts;