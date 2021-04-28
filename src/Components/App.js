// Import React

import React, { Component } from 'react';

// Import Components

import SearchForm from './SearchForm';
import Nav from './Nav';
import Gallery from './Gallery';

// Import Flickr

import Flickr from '../API/Flickr';

// The App Component

class App extends Component {

    // Initialize State

    state = { data: [] }

    // Methods

    // componentDidMount

    componentDidMount = () => this.getData();

    // getData

    getData = async () => {

        try {

            const { data } = await Flickr.get('/', { params: { tags: 'sunset' } });
            this.setState({ data });

        } catch (error) {

            console.log('Data Fetching Process Failed: ' + error);
            
        }

    }

    // Render

    render = () => {

        return (

            <div className="container">
                <SearchForm />
                <Nav />
                <Gallery />
            </div>
    
        )

    }

}

// Export Component

export default App;