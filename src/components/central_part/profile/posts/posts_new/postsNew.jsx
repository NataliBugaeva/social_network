import React from 'react';
import n from './postsNew.module.css';

const PostsNew = (props) => {

    let textareaPostRef = React.createRef(); //создали ссылку для превязки textarea (для последующего взятия value)

    //showNewPost добавляет новый пост на стену
    let showNewPost = () => {
        props.addPost();
    };

    //onPostChange каждый раз перерисовывает все при изменении значения в textarea
    let onPostChange = () => {

        let text = textareaPostRef.current.value;
        props.changePost(text);
    };

    return (
        <div className={n.posts_new}>

            <h2>My post</h2>
            <textarea onChange={onPostChange} ref={textareaPostRef} value={props.postNewText}/>
            <button onClick={showNewPost}>Send</button>

        </div>
    );
}

export default PostsNew;
