// Import React

import React from 'react';

// Import Components

import SearchForm from './SearchForm';
import Nav from './Nav';
import Gallery from './Gallery';

// The App Component

const App = () => {

    return (

        <div className="container">
            <SearchForm />
            <Nav />
            <Gallery />
        </div>

    )

}

// Export Component

export default App;