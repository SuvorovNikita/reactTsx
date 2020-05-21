import React from "react";
import style from "../../components/counter/counter.module.css";

const Input = (props: any) => {
    let {type, name, onKeyEnter, onChangeText, error} = props;
    let styleError = error ? style.error : '';
    return (<div>
        <input type={type}
               value={name}
               className={styleError}
               onKeyPress={onKeyEnter}
               onChange={onChangeText}/>
    </div>)
};

export default Input;
