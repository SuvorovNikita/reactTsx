import React, {useState} from 'react';
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


    return (<form className={style.form}>
            <span>{counts}</span>
            <input type='text' value={text} onChange={e => {
                setText(e.currentTarget.value)
            }}/>
            <button onClick={counterUpdate}>Click</button>
        </form>
    )
}

export default Counter;