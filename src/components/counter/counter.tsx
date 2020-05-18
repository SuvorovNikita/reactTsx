import React, {ChangeEvent, useState} from 'react';
import style from './counter.module.css';

type NamesType = {
    id: string
    names: string
}

type PropsType = {
    names: Array<NamesType>
    addName: (name: string) => void
}

const Counter = (props: PropsType) => {

    let [counts, setCounts] = useState(0);
    let [name, setName] = useState('');
    let {addName} = props;

    function upName(name: string) {
        setCounts(counts + 1);
        addName(name);
        alert('Привет' + ' ' + (name));
        setName('');
    }

    function onChangeText(e: ChangeEvent<HTMLInputElement>) {
        setName(e.currentTarget.value)
    }

    return (<div className={style.form}>
            <span>{counts}</span>
            <input type='text' value={name} onChange={onChangeText}/>
            <button onClick={()=>{upName(name)}}>Click
            </button>
        </div>
    )
};

export default Counter;