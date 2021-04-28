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

        const { data } = this.props;

        const photos = data.map((object) => {

            // The Starting URL Of Every Photo

            const baseURL = 'https://live.staticflickr.com';

            // Extract Required Information From Each Object

            const serverID = object.server;
            const key = object.id;
            const { secret, title } = object;

            // Construct Photo Properties

            const src = baseURL + '/' + serverID + '/' + key + '_' + secret + '_q.jpg';
            const alt = title;

            // Generate A Photo Component

            return <Photo key= { key } src= { src } alt= { alt } />

        });

        return photos;

    }

    // Render

    render = () => {
        
        const photos = this.getPhotos();

        return (

            <div className="photo-container">
                <h2>Results</h2>
                <ul>
                    { photos }
                </ul>
            </div>

        )

    }

}

// Export Gallery

export default Gallery;