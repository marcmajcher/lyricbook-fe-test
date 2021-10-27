import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {

    return (
        <div className="nav-bar">
            <NavLink
                activeClassName="active-nav-link"
                className="nav-link"
                exact to="/home">
                Home
            </NavLink>

            <NavLink
                activeClassName="active-nav-link"
                className="nav-link"
                exact to="/dashboard">
                Journal
            </NavLink>

            <NavLink
                activeClassName="active-nav-link"
                className="nav-link"
                exact to="/profile">
                Profile
            </NavLink>
        
        </div>
    )
}

export default NavBar