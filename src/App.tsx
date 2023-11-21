import React from 'react';
import './App.scss';
import Card from './components/Card/Card';
import Details from './components/Details/Details';

const App = () => {
    return (
        <div className="container">
            <Card />
            <Details />
        </div>
    );
};

export default App;
