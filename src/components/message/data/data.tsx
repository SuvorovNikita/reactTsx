import React from "react";
import style from './data.module.css';

type PropsType = {
    time: string
}

const Data = (props: PropsType) => {
    const {time} = props;
    return (
        <div>
            <p className={style.time}>{time}</p>
        </div>
    )
}

export default Data;