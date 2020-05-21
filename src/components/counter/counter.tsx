import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from './counter.module.css';
import Button from "../../ui/button/button";


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
    let [error, setError] = useState();

    let {addName} = props;
    let styleError = error ? style.error : '';


    function upName(name: string) {
        let trimName = name.trim();
        if (trimName) {
            setCounts(counts + 1);
            addName(name);
            alert('Привет' + ' ' + (name));
            setName('');
        } else setError(style)
    }

    function onChangeText(e: ChangeEvent<HTMLInputElement>) {
        setName(e.currentTarget.value)
    }

    function onKeyEnter(e: KeyboardEvent<HTMLInputElement>) {
        setError('');
        if (e.charCode === 13) {
            upName(name);
        }
    }

    const onClickName = () => {
        upName(name)
    };

    let nameElement = props.names.map(n=><p className={style.name}>{n.names}</p>);

    return (<div className={style.form}>
            {nameElement}
            <span>{counts}</span>
            <input type='text' value={name} className={styleError} onKeyPress={onKeyEnter} onChange={onChangeText}/>
            <Button />
            <button onClick={onClickName}>Click</button>
        </div>
    )
};

export default Counter;