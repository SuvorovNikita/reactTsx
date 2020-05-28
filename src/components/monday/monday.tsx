import React from "react";
import Message from "../message/message";
import Qualities from "../qualities/qualities";
import Counter from "../counter/counter";


type TypeTexts = {
    id: string
    texts: string
    active: boolean
}

type ArrayTexts = {
    texts: Array<TypeTexts>
    addName: (name: string) => any
    names:(any)

}

const Monday = (props: ArrayTexts) => {
    let {texts, names, addName} = props
    return (
        <div>
            <Message/>
            <Qualities texts={texts}/>
            <Counter addName={addName} names={names}/>
        </div>
    )
}

export default Monday;