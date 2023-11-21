import React, { useEffect, useState } from 'react';
import './App.scss';
import Card from './components/Card/Card';
import Details from './components/Details/Details';
import SearchForm from './components/SearchForm/SearchForm';
import axios from 'axios';
import { IForecast } from './types/types';

const App = () => {
    const [forecast, setForecast] = useState<IForecast | null>(null);

    useEffect(() => {
        fetchForecast();
    }, []);

    const fetchForecast = async () => {
        const response = await axios.get<IForecast>(
            `https://api.openweathermap.org/data/2.5/weather?q=dnipro&units=metric&appid=cbf7feaaafe60e2be6038d48a828d9c9`
        );
        setForecast(response.data);
    };

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
