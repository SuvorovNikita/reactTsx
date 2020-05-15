import React, {useState} from "react";
import style from "./counter.module.css";


function Counter() {

    return (<form className={style.form}>
            <span>0</span>
            <input />
            <button>Click</button>
        </form>
    )
}

export default Counter;