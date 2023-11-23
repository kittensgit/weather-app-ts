import React, { useEffect, useState } from 'react';
import './App.scss';
import Card from './components/Card/Card';
import Details from './components/Details/Details';
import SearchForm from './components/SearchForm/SearchForm';
import axios from 'axios';
import { IForecast } from './types/types';

const App = () => {
    const [forecast, setForecast] = useState<IForecast | null>(null);
    const [cityName, setCityName] = useState<string>('');

    useEffect(() => {
        fetchForecast();
    }, [cityName]);

    const fetchForecast = async () => {
        if (cityName) {
            try {
                const response = await axios.get<IForecast>(
                    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=cbf7feaaafe60e2be6038d48a828d9c9`
                );
                setForecast(response.data);
            } catch (error) {
                console.warn(error);
                alert("location isn't found");
            }
        }
    };

    const handleCityName = (city: string) => {
        setCityName(city);
    };

    const handleBgImage = (weather: IForecast['weather']) => {
        switch (weather[0].main) {
            case 'Clouds':
                return 'bg-clouds';
            case 'Thunderstorm':
                return 'bg-thunder';
            case 'Rain' && 'Drizzle':
                return 'bg-rain';
            case 'Clear':
                return 'bg-sun';
            case 'Snow':
                return 'bg-snow';
            default:
                return 'bg-clouds';
        }
    };

    return (
        <div
            className={`${
                forecast ? handleBgImage(forecast.weather) : 'base-bg'
            } 
            container`}
        >
            <SearchForm handleCityName={handleCityName} />
            {forecast ? (
                <>
                    <Card
                        name={forecast.name}
                        temp={forecast.main.temp}
                        weather={forecast.weather[0].description}
                        max_temp={forecast.main.temp_max}
                        min_temp={forecast.main.temp_min}
                        feels_like={forecast.main.feels_like}
                    />
                    <Details
                        feels_like={forecast.main.feels_like}
                        humidity={forecast.main.humidity}
                        pressure={forecast.main.pressure}
                        visibility={forecast.visibility}
                        wind={forecast.wind.speed}
                        sea={forecast.main.sea_level}
                    />
                </>
            ) : (
                <div>Enter location</div>
            )}
        </div>
    );
};

export default App;
