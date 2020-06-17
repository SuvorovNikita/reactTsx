import React from "react";
import styles from "./qualitie.module.css";


const Qualitie = (props: any) => {
    let {t} = props;
    let activeClass = t.active ? styles.textActive : styles.text;
    return (
        <p className={activeClass}>{t.texts}</p>
    )
};


export default Qualitie;