import React from "react";
import Avatar from "./avatar/avatar";
import Post from "./post/post";
import Data from "./data/data";
import Name from "./name/name";

import style from './message.module.css';


function Message() {
    return (
        <div className={style.wrapper}>
            <Avatar/>
            <div className={style.wrapperMessage}>
                <Name name='Nikita'/>
                <Post message='message'/>
                <Data time='10:00'/>
            </div>
        </div>
    )
}

export default Message;