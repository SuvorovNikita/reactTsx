import React, {ChangeEvent, useState} from 'react';
import style from './counter.module.css';


function Counter() {

    let [counts, setCounts] = useState(0);
    let [text, setText] = useState('');


    function counterUpdate() {
        setCounts(+1);
        setText(text);
        alert('Привет' + ' ' + (text));
        setText('');
    }

    function onChangeText(e: ChangeEvent<HTMLInputElement>) {
        setText(e.currentTarget.value);
    }


    return (<form className={style.form}>
            <span>{counts}</span>
            <input type='text' value={text} onChange={onChangeText}/>
            <button onClick={counterUpdate}>Click</button>
        </form>
    )
}

export default Counter;