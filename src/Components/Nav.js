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
                    <NavLink to="/puppies">Dogs</NavLink>
                </li>
                <li>
                    <NavLink to="/pandas">Pandas</NavLink>
                </li>
            </ul>
        </nav>

    )
    
}

// Export Navigation

export default Nav;