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

    state = { searchResults: [], cats: [], dogs: [], pandas: [], loading: true }

    // Methods

    // componentDidMount

    componentDidMount = () => {

        this.getData();
        this.getData('dogs');
        this.getData('panda bears');

    }

    // getData

    getData = async (tags = 'cats') => {

        try {

            const { data } = await Flickr.get('/', { params: { tags } });

            // Extract The 'Photo' Array From The API Response

            const { photos } = data;
            const { photo } = photos;

            // Update App State

            if (tags === 'cats')
                this.setState({ cats: photo });
              
            else if (tags === 'dogs')
                this.setState({ dogs: photo });
                
            else if (tags === 'panda bears')
                this.setState({ pandas: photo });

            else
                this.setState({ searchResults: photo })

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
                        <Gallery data= { this.state.cats } />
                    </Route>
                    <Route path="/puppies">
                        <Gallery data= { this.state.dogs } />
                    </Route>
                    <Route path="/pandas">
                        <Gallery data= { this.state.pandas }  />
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