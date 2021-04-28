// Import React

import React from 'react';

// The Photo Component

const Photo = ({ src, alt }) => {

    return (

        <li>
            <img src= { src } alt= { alt }></img>
        </li>

    )

}

// Export Photo

export default Photo;