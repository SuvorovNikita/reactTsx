import React from "react";
import Message from "../message/message";
import Qualities from "../qualities/qualities";
import Counter from "../counter/counter";


export type TypeTexts = {
    id: string
    texts: string
    active: boolean
}

type TypeNames = {
    id: string
    names: string
}

type PropsType = {
    texts: Array<TypeTexts>
    names: Array<TypeNames>
    addName: (name: string) => void

}

const Monday = (props: PropsType) => {
    let {texts, addName, names} = props;
    return (
        <div>
            <Message/>
            <Qualities
                texts={texts}
            />
            <Counter addName={addName} names={names}/>
        </div>
    )
}

export default Monday;