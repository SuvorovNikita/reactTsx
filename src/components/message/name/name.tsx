import React from "react";
import style from "./name.module.css"

type PropsType = {
    name: string
}


function Name(props:PropsType) {
    return (
        <div>
            <h3 className={style.name}>{props.name}</h3>
        </div>
    )
}

export default Name;