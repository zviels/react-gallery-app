// Import React

import React, { useEffect } from 'react';

// Import React Router Components

import { useHistory, useParams } from 'react-router';

// Import Components

import Photo from './Photo';
import NoResults from './NoResults';

// The Gallery Component

const Gallery = ({ data, search }) => {

    // Hooks

    const { term } = useParams();
    const history = useHistory();

    // Methods

    // useEffect

    useEffect(() => {

        const { action } = history;

        // If The Search Form Was Used, And The User Clicked On The 'Back' Or 'Forward' Buttons - Run The Search Function

        if (term && action === 'POP') {

            search(term);

            // Prevent The Search Function From Running Repeatedly By Using The 'Replace' Action Instead Of The 'Pop' Action

            history.replace('/search/' + term, data);

        }
            
    });

    // getPhotos

    const getPhotos = () => {

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

    const render = () => {

        return (

            <div className="photo-container">
                <h2>Results</h2>
                <ul>
                    { getPhotos() }
                </ul>
            </div>
    
        )

    }

    // Call The Render Method

    return render();

}



// Export Gallery

export default Gallery;