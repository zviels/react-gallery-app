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

import Giphy from '../API/Giphy';

// The App Component

class App extends Component {

    // Initialize State

    state = { searchResults: [], cats: [], dogs: [], monkeys: [], loading: true }

    // Methods

    // Lifecycle Methods

    // componentDidMount

    componentDidMount = () => {

        this.getData();
        this.getData('dogs');
        this.getData('monkeys');

    }

    // Additional Methods

    // getData

    getData = async (q = 'cats') => {

        try {

            this.setState({ loading: true });
            
            const { data } = await Giphy.get('/search', { params: { q } });
            console.log(data);

            // Update App State

            if (q === 'cats')
                this.setState({ cats: data.data });
              
            else if (q === 'dogs')
                this.setState({ dogs: data.data });
                
            else if (q === 'monkeys')
                this.setState({ monkeys: data.data });

            else
                this.setState({ searchResults: data.data })

            this.setState({ loading: false });    

        } catch (error) {

            console.log('Data Fetching Process Failed: ' + error);
            
        }

    }

    // Search

    // search = (term) => this.getData(term);

    // Render

    render = () => {
        
        return (

            <div className="container">
                <SearchForm search= { this.getData } />
                <Nav />
                <Switch>
                    <Route exact path="/">
                        <Gallery data= { this.state.cats } loading= { this.state.loading } />
                    </Route>
                    <Route path="/dogs">
                        <Gallery data= { this.state.dogs } loading= { this.state.loading } />
                    </Route>
                    <Route path="/monkeys">
                        <Gallery data= { this.state.monkeys } loading= { this.state.loading } />
                    </Route>
                    <Route path="/search/:term">
                        <Gallery data= { this.state.searchResults } search= { this.getData } loading= { this.state.loading } />
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