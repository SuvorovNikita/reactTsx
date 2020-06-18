import React from "react";
import Message from "../message/message";
import Qualities from "../qualities/qualities";
import Counter from "../counter/counter";
import Profess from "../profes/profess";


export type TypeTexts = {
    id: string
    texts: string
    active: boolean
}
type TypeProf = {
    id: string
    profession: string
    isActive: boolean
}

type TypeNames = {
    id: string
    names: string
}

export type PropsType = {
    texts: Array<TypeTexts>
    names: Array<TypeNames>
    prof: Array<TypeProf>
    addName: (name: string) => void
    deleteProff: (id: string) => void
    filterProff: (value: 'all' | 'low' | 'height') => void

}

const Monday = (props: PropsType) => {
    let {texts, addName, names, prof, deleteProff,filterProff} = props;
    return (
        <div>
            <Message/>
            <Qualities
                texts={texts}
            />
            <Profess prof={prof}
                     filterProff={filterProff}
                     deleteProff={deleteProff}/>
            <Counter addName={addName} names={names}/>
        </div>
    )
}

export default Monday;