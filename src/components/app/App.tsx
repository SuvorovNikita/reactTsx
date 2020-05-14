import React, {useState} from 'react';
import {v1} from "uuid";

import Message from "../message/message";
import Qualities from "../qualities/qualities";

import style from './App.module.css';


function App() {

    let [text, setText] = useState([
        {id: v1(), text: 'качество 1', active: true},
        {id: v1(), text: 'качество 2', active: false},
        {id: v1(), text: 'качество 3', active: true}
    ]);

    return (
        <div className={style.wrapper}>
            <Message/>
            <Qualities text={text}/>
        </div>
    );
}

export default App;
