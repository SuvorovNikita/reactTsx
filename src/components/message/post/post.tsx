import React from "react";
import style from "./post.module.css";

type PropsType = {
    message: string
}

const Post = (props: PropsType) => {
    const {message} = props;
    return (
        <div>
            <p className={style.text}>{message} </p>
        </div>
    )
}

export default Post;