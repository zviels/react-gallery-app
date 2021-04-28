// Import React

import React, { Component } from 'react';

// Import Components

import Photo from './Photo';
import NoResults from './NoResults';

// The Gallery Component

class Gallery extends Component {

    // Initialize State

    state = { images: [] };

    // Methods

    // getPhotos

    getPhotos = () => {

    }

    // Render

    render = () => {

        return (

            <div className="photo-container">
                <h2>Results</h2>
                <ul>
                    { /* Photos */ }
                </ul>
            </div>

        )

    }

}

// Export Gallery

export default Gallery;