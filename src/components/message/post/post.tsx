import React from "react";
import style from "./post.module.css";

type PropsType = {
    message: string
}

function Post(props: PropsType) {
    return (
        <div>
            <p className={style.text}>{props.message} </p>
        </div>
    )
}

export default Post;