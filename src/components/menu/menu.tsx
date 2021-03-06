import React, {useState} from "react";
import style from './menu.module.css'
import {NavLink} from "react-router-dom";

const Menu = () => {

    let [menu, setMenu] = useState(
        {isActive: false}
    );

    const activeMenu = () => {
        setMenu({isActive: !menu.isActive});
    };

    let menuActive = menu.isActive ? style.navActive : style.nav;

    return (
        <div>
           <div className={style.wrapperBtn}><button onClick={activeMenu}>Menu</button></div>
            <nav className={menuActive}>
                <NavLink activeClassName={style.active} className={style.link} to="/preJunior">preJunior</NavLink>
                <NavLink activeClassName={style.active} className={style.link} to="/Junior">Junior</NavLink>
                <NavLink activeClassName={style.active} className={style.link} to="/Junior+">Junior+</NavLink>
            </nav>
        </div>

    )
}

export default Menu;