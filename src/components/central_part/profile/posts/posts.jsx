import React from 'react';
import n from './posts.module.css';

import PostsNewContainer from "./posts_new/postsNewContainer";
import PostsAvailableContainer from "./posts_available/postsAvailableContainer";


const Posts = (props) => {
    return (
        <div className={n.posts}>
            {/*<PostsNewContainer store={props.store}/>
            <PostsAvailable store={props.store}/>*/}

            <PostsNewContainer />
            <PostsAvailableContainer />
        </div>
    );
}

export default Posts;