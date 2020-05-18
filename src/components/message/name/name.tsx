import React from "react";
import style from "./name.module.css"

type PropsType = {
    name: string
}


const Name = (props: PropsType) => {
    const {name} = props;
    return (
        <div>
            <h3 className={style.name}>{name}</h3>
        </div>
    )
}

export default Name;