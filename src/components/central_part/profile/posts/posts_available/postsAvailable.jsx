import React from "react";
import n from './postsAvailable.module.css';

import Post from "./post/post";
import StoreContext from "../../../../../storeContext";

const PostsAvailable = (props) => {

  /*  //здесь отдельно выцепила posts, так как в пропсы передаала полностью весь store
    let posts = props.store.getState().profilePage.posts;
    let postsComponents = posts.map(elem => <Post id={elem.id} text={elem.text} src={elem.src} />);*/


    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let posts = store.getState().profilePage.posts;
                    let postsComponents = posts.map(elem => <Post id={elem.id} text={elem.text} src={elem.src} />);

                    return (
                        <div className={n.posts_available}>
                            {postsComponents}
                        </div>
                    )
            }
            }
        </StoreContext.Consumer>
    );
}

export default PostsAvailable;