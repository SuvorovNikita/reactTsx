import React from "react";
import styles from "./qualitie.module.css";


type TextType = {
    texts: string
    id: string
    active: boolean
}

type PropsType ={
    texts: Array<TextType>
}


const Qualitie = (props: any) => {
    let {t} = props;
    let activeClass = t.active ? styles.textActive : styles.text;
    return (
        <div className={activeClass}>{t.texts}</div>
    )
};


export default Qualitie;