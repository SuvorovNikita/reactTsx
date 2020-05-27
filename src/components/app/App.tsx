import React, {useState} from 'react';
import {v1} from "uuid";

import Message from "../message/message";
import Qualities from "../qualities/qualities";
import Counter from "../counter/counter";
import Menu from "../menu/menu";

import style from './App.module.css';


const App = () => {

    let [texts] = useState([
        {id: v1(), texts: 'качество 1', active: false},
        {id: v1(), texts: 'качество 2', active: true},
        {id: v1(), texts: 'качество 3', active: false},
    ]);

    let [names, setNames] = useState([
        {id: v1(), names: ""}
    ]);

    let [menu] = useState([
        {id: v1(), linkName: 'Один', isActive: false},
        {id: v1(), linkName: 'Два', isActive: true}
    ])


    function addName(name: string) {
        let newName = {id: v1(), names: name};
        let updateName = [newName, ...names];
        setNames(updateName);
    }


    return (
        <div className={style.wrapper}>
            <Menu menu={menu}/>
            <Message/>
            <Qualities texts={texts}/>
            <Counter addName={addName} names={names}/>
        </div>
    );
};

export default App;
