// Import React

import React, { Component } from 'react';

// Import React Router Components

import { Switch, Route } from 'react-router-dom';

// Import Components

import SearchForm from './SearchForm';
import Nav from './Nav';
import Gallery from './Gallery';
import NotFound from './NotFound';

// Import Flickr

import Flickr from '../API/Flickr';

// The App Component

class App extends Component {

    // Initialize State

    state = { data: [], loading: true }

    // Methods

    // componentDidMount

    componentDidMount = () => this.getData();

    // getData

    getData = async (tags = 'kittens') => {

        try {

            const { data } = await Flickr.get('/', { params: { tags } });

            // Extract The 'Photo' Array From The API Response

            const { photos } = data;
            const { photo } = photos;

            // Update App State

            this.setState({ data: photo, loading: false });

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
                <Switch>
                    <Route exact path="/">
                        Kittens
                        <Gallery />
                    </Route>
                    <Route path="/puppies">
                        Puppies
                        <Gallery />
                    </Route>
                    <Route path="/pandas">
                        Pandas
                        <Gallery />
                    </Route>
                    <Route path="/search/:term">
                        <Gallery />
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </div>
    
        )

    }

}

// Export Component

export default App;