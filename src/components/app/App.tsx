import React, {useState} from 'react';
import {v1} from "uuid";

import Message from "../message/message";
import Qualities from "../qualities/qualities";
import Counter from "../counter/counter";

import style from './App.module.css';


function App() {

    let [texts, setText] = useState([
        {id: v1(), texts: 'качество 1', active: false},
        {id: v1(), texts: 'качество 2', active: true},
        {id: v1(), texts: 'качество 3', active: false}
    ]);

    return (
        <div className={style.wrapper}>
            <Message/>
            <Qualities texts={texts}/>
            <Counter/>
        </div>
    );
}

export default App;
