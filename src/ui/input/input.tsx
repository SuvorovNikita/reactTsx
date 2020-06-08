import React, {ChangeEvent, KeyboardEvent} from "react";
import style from "../../components/counter/counter.module.css";

type PropsType = {
    type: string
    name: string
    error: string
    onKeyEnter: (e: KeyboardEvent<HTMLInputElement>) => void
    onChangeText: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: PropsType) => {
    let {type, name, onKeyEnter, onChangeText, error} = props;
    let styleError = error ? style.error : '';
    return <input type={type}
                  value={name}
                  className={styleError}
                  onKeyPress={onKeyEnter}
                  onChange={onChangeText}/>

};

export default Input;
