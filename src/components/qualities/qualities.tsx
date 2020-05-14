import React from "react";
import style from "./qualities.module.css"


type TextType = {
    text: string
    id: string
    active: boolean
}

type PropsType = {
    text: Array<TextType>
}

function Qualities(props: PropsType) {
    let text = props.text.map(t => <div key={t.id}>{t.text}</div>);
    return (
        <div>
            {text}
        </div>
    )
}

export default Qualities;