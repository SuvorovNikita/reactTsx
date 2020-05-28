import React from "react";
import styles from "./qualities.module.css";
import Qualitie from "./qualitie/qualitie";


type TextType = {
    texts: string
    id: string
    active: boolean
}

type PropsType = {
    texts: Array<TextType>
}


const Qualities = (props: PropsType) => {

    let textsElement = props.texts.map(t => <Qualitie key={t.id} t={t}/>);
    return (
        <div className={styles.map}>
            {textsElement}
        </div>
    )
};


export default Qualities;