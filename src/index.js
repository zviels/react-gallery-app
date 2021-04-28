// Import React

import React from 'react';
import ReactDOM from 'react-dom';

// Import React Router

import { BrowserRouter } from 'react-router-dom';

// Import App

import App from './Components/App';

// Render App

ReactDOM.render(

    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.querySelector('#root')
    
);