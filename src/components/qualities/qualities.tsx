import React from "react";
import style from "./qualities.module.css"


type TextType = {
    texts: string
    id: string
    active: boolean
}

type PropsType = {
    texts: Array<TextType>
}

function Qualities(props: PropsType) {
    let textsElements = props.texts.map(t => <div className={t.active ? style.textActive : style.text} key={t.id}>{t.texts}</div>);
    return (
        <div>
           <h3 className={style.map}>{textsElements}</h3>
        </div>
    )
}

export default Qualities;