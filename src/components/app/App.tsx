import React from 'react';
import Message from "../message/message";

import style from './App.module.css';

function App() {
    return (
        <div className={style.wrapper}>
            <Message />
        </div>
    );
}

export default App;
