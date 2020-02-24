import React from 'react';
import PostsNew from "./postsNew";

import {showNewPostActionCreator, onPostChangeActionCreator} from "../../../../../redux/profilePageReducer";
import StoreContext from "../../../../../storeContext";

const PostNewContainer = (props) => {

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
};

export default PostNewContainer;