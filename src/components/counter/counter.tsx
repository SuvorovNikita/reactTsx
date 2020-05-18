import React, {ChangeEvent, useState} from 'react';
import style from './counter.module.css';


const Counter = () => {

    let [counts, setCounts] = useState(0);
    let [name, setName] = useState('');


    function counterUpdate() {
        setCounts(counts + 1);
        alert('Привет' + ' ' + (name));
        setName('');
    }

    function onChangeText(e: ChangeEvent<HTMLInputElement>) {
        setName(e.currentTarget.value)
    }

    return (<div className={style.form}>
            <span>{counts}</span>
            <input type='text' value={name} onChange={onChangeText}/>
            <button onClick={counterUpdate}>Click</button>
        </div>
    )
};

export default Counter;