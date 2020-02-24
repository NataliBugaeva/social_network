import React from "react";
import StoreContext from "../../../../../storeContext";

import PostsAvailable from "./postsAvailable";

/*import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";*/

import {connect} from "react-redux";


/*const PostsAvailableContainer = (props) => {
    return (
        <StoreContext>
            {
                (store) => {
                    let posts = store.getState().profilePage.posts;
                    return (<PostsAvailable posts={posts}/>)
                }
            }
        </StoreContext>
    );
};*/

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
};

let mapDispatchToProps = (dispatch) => {
    return {

    }
};

const PostsAvailableContainer = connect(mapStateToProps, mapDispatchToProps)(PostsAvailable);

export default PostsAvailableContainer;