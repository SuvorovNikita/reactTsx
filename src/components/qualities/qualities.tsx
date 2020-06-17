import React from "react";
import styles from "./qualities.module.css";
import Qualitie from "./qualitie/qualitie";


export type TextType = {
    texts: string
    id: string
    active: boolean
}

export type PropsType = {
    texts: Array<TextType>
}


const Qualities = (props: PropsType) => {
    let {texts} = props;
    let textsElement = texts.map(t => <Qualitie key={t.id} t={t}/>);
    return (
        <div className={styles.map}>
            {textsElement}
        </div>
    )
};


export default Qualities;