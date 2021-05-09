// Import React

import React from 'react';

// Import Navigation Link

import { NavLink } from 'react-router-dom';

// The Nav Component

const Nav = () => {

    return (

        <nav className="main-nav">
            <ul>
                <li>
                    <NavLink exact to="/">Cats</NavLink>
                </li>
                <li>
                    <NavLink to="/dogs">Dogs</NavLink>
                </li>
                <li>
                    <NavLink to="/monkeys">Monkeys</NavLink>
                </li>
            </ul>
        </nav>

    )
    
}

// Export Navigation

export default Nav;