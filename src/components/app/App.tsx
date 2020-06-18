import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import {v1} from "uuid";

import Menu from "../menu/menu";
import Monday from '../monday/monday';
import Tuesday from "../tuesday/tuesday";

import style from './App.module.css';


const App = () => {

    let [texts, setText] = useState([
        {id: v1(), texts: 'качество 1', active: false},
        {id: v1(), texts: 'качество 2', active: true},
        {id: v1(), texts: 'качество 3', active: false},
    ]);

    let [names, setNames] = useState([
        {id: v1(), names: ""}
    ]);

    let [prof, setProf] = useState([
        {id: v1(), profession: 'Дела', isActive: false},
        {id: v1(), profession: 'Дела', isActive: false},
        {id: v1(), profession: 'ДелаВажные', isActive: true}
    ]);

    let [filter, setFilter] = useState('all')

    let filterProf = prof
    if (filter === 'low') {
        filterProf = prof.filter(p => !p.isActive)
    }
    if (filter === 'height') {
        filterProf = prof.filter(p => p.isActive)
    }


    function filterProff(value: 'all' | 'low' | 'height') {
        setFilter(value)
    }

    function addName(name: string) {
        let newName = {id: v1(), names: name};
        let updateName = [newName, ...names];
        setNames(updateName);
    }

    function deleteProff(id: string) {
        let delProf = prof.filter(p => p.id !== id)
        setProf(delProf)
    }


    return (
        <div className={style.wrapper}>
            <Menu/>
            <Route path='/preJunior' render={() => <Monday texts={texts}
                                                           prof={filterProf}
                                                           filterProff={filterProff}
                                                           deleteProff={deleteProff}
                                                           addName={addName}
                                                           names={names}/>}/>
            <Route path='/Junior' component={Tuesday}/>
        </div>
    );
};

export default App;
