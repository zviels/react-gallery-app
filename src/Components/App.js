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

    // Lifecycle Methods

    // componentDidMount

    componentDidMount = () => {

        this.getData();
        this.getData('dogs');
        this.getData('panda bears');

    }

    // Additional Methods

    // getData

    getData = async (tags = 'cats') => {

        try {

            this.setState({ loading: true });
            
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

            this.setState({ loading: false });    

        } catch (error) {

            console.log('Data Fetching Process Failed: ' + error);
            
        }

    }

    // Search

    search = (term) => this.getData(term);

    // Render

    render = () => {
        
        return (

            <div className="container">
                <SearchForm search= { this.search } />
                <Nav />
                <Switch>
                    <Route exact path="/">
                        <Gallery data= { this.state.cats } loading= { this.state.loading } />
                    </Route>
                    <Route path="/dogs">
                        <Gallery data= { this.state.dogs } loading= { this.state.loading } />
                    </Route>
                    <Route path="/pandas">
                        <Gallery data= { this.state.pandas } loading= { this.state.loading } />
                    </Route>
                    <Route path="/search/:term">
                        <Gallery data= { this.state.searchResults } search= { this.search } loading= { this.state.loading } />
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