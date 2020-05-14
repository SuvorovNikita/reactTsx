import React from "react";
import style from './data.module.css';

type PropsType = {
    time: string
}

function Data(props:PropsType) {
    return (
        <div>
            <p className={style.time}>{props.time}</p>
        </div>
    )
}

export default Data;