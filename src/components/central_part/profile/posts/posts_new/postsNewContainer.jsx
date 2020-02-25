import React from 'react';
import PostsNew from "./postsNew";

import {showNewPostActionCreator, onPostChangeActionCreator} from "../../../../../redux/profilePageReducer";

import {connect} from "react-redux";

/*import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";*/



 /*   //postNewText будем перегонять через пропсы для postNew, чтобы там небыло никакого взаимодействия со стором
    let postNewText = props.store.getState().profilePage.postNewText;*/

  /*  //addPost добавляет новый пост на стену
    let addPost = () => {
        props.store.dispatch(showNewPostActionCreator());
    };*/

   /* //changePost каждый раз перерисовывает все при изменении значения в textarea
    let changePost = (text) => {
        props.store.dispatch(onPostChangeActionCreator(text));
    };*/

/*const PostNewContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let postNewText = store.getState().profilePage.postNewText;

                    let addPost = () => {
                        store.dispatch(showNewPostActionCreator());
                    };

                    let changePost = (text) => {
                        store.dispatch(onPostChangeActionCreator(text));
                    };

                  return  <PostsNew addPost={addPost} changePost={changePost} postNewText={postNewText}/>;
                }
            }
        </StoreContext.Consumer>
        );
};*/

let mapStateToProps = (state) => {
    return {
        postNewText: state.profilePage.postNewText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(showNewPostActionCreator());
        },

        changePost: (text) => {
            dispatch(onPostChangeActionCreator(text));
        }
    }
};

const PostsNewContainer = connect(mapStateToProps, mapDispatchToProps)(PostsNew);

export default PostsNewContainer;