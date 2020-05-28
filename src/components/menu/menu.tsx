import React from "react";
import style from './menu.module.css'
import { NavLink } from "react-router-dom";

const Menu = () => {

    return (
        <nav className={style.menuWrapper}>
            <NavLink to="/monday">Monday</NavLink>
            <NavLink to="/tuesday">Tuesday</NavLink>
        </nav>
    )
}

export default Menu;