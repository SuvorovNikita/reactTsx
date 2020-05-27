import React from "react";
import style from './menu.module.css'

type PropsMenu = {
    linkName: string
    isActive: boolean
    id: string
}

type MenuArray = {
    menu: Array<PropsMenu>
}

const Menu = (props: MenuArray) => {
    let {menu} = props;
    let menuLinks = menu.map(m => <a href=".#" key={m.id} >{m.linkName}</a>)
    return (
        <div className={style.menuWrapper}>
            <a href=".#">{menuLinks}</a>
        </div>
    )
}

export default Menu;