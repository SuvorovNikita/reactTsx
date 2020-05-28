import React, {useState} from 'react';
import { Route} from 'react-router-dom';
import {v1} from "uuid";

import Menu from "../menu/menu";
import Monday from '../monday/monday';
import Tuesday from "../tuesday/tuesday";

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

    function addName(name: string) {
        let newName = {id: v1(), names: name};
        let updateName = [newName, ...names];
        setNames(updateName);
    }

    return (

        <div className={style.wrapper}>
            <Menu/>
            <Route path='/monday' component={Monday} />
            <Route path='/tuesday' component={Tuesday}/>
        </div>
    );
};

export default App;
