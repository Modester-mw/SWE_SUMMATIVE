import React from 'react'
import NavItems from "./NavItems"
import logoImage from "../../imgs/logo_transparent.png"
import "../../css/components_css/components_main.css"
import {FaUserCircle} from "react-icons/fa"

const Header = () => {
    return (
        <header>
            <nav className="nav">
                <img src={logoImage} className="nav-logo" alt="nav-logo"/>
                <NavItems />
                <FaUserCircle className="nav-user-icon"/>
            </nav>
        </header>
    )
}

export default Header
