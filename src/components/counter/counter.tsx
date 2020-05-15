import React, {useState} from "react";
import style from "./counter.module.css";
import {log} from "util";


function Counter() {

    let [counts, setCounts] = useState([{
        counter: 0
    }]);

    function counterUp() {
        let newCounter = {counter: +1};
        let newCount=[newCounter, ...counts];
        setCounts(newCount);
    }


    return (<form className={style.form}>
            <span>{counts[0].counter}</span>
            <input/>
            <button onClick={counterUp}>Click</button>
        </form>
    )
}

export default Counter;