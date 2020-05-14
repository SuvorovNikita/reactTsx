import React from "react";
import styles from "./qualities.module.css";


type TextType = {
    text: string
    id: string
    active: boolean
}

type PropsType = {
    texts: Array<TextType>
}

function Qualities(props: PropsType) {
    let textsElement = props.texts.map(t => <div className={t.active ? styles.textActive : styles.text } key={t.id}>{t.text}</div>);
    return (
        <div>
            {textsElement}
        </div>
    )
}

export default Qualities;