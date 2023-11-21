import React from 'react';
import './App.scss';
import Card from './components/Card/Card';
import Details from './components/Details/Details';
import SearchForm from './components/SearchForm/SearchForm';

const App = () => {
    return (
        <div className="container">
            <div className="wrap">
                <SearchForm />
                <Card />
            </div>
            <Details />
        </div>
    );
};

export default App;
