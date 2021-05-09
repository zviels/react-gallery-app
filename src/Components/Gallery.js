// Import React

import React, { useEffect } from 'react';

// Import React Router Components

import { useHistory, useParams } from 'react-router';

// Import Components

import Photo from './Photo';
import NoResults from './NoResults';

// The Gallery Component

const Gallery = ({ data, search, loading }) => {

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

            // Extract The ID From Each Object

            const key = object.id;

            // Construct Photo Properties

            const src = object.images.original.url;
            const alt = object.title;

            // Generate A Photo Component

            return <Photo key= { key } src= { src } alt= { alt } />

        });

        return photos;

    }

    // Render

    const render = () => {

        if (loading)
            return <h3>Loading...</h3>

        else if (data.length === 0)
            return <NoResults />

        else return (

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