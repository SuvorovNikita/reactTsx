import React from "react";

type TypeProf = {
    id: string
    profession: string
    isActive: boolean
}

type PropsType = {
    prof: Array<TypeProf>
    deleteProff: (id: string) => void
    filterProff: (value: 'all' | 'low' | 'height') => void
}

const Profess = (props: PropsType) => {
    let {prof, deleteProff} = props;
    let professionMap = prof.map(p => <p style={{color: "white", paddingBottom: '5px'}}
                                         key={p.id}>{p.profession}
        <button style={{marginLeft: '20px'}}
                onClick={() => deleteProff(p.id)}>Delete
        </button>

    </p>)
    return <div style={{textAlign: "center", padding: '50px 0 '}}>
        {professionMap}
        <button onClick={() => props.filterProff('all')}>Все</button>
        <button onClick={() => props.filterProff('height')}>Важные</button>
        <button onClick={() => props.filterProff('low')}>Неважные</button>
    </div>
}

export default Profess;