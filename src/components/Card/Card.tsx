import React, { FC } from 'react';
import './Card.scss';

interface CardProps {
    name: string;
    temp: number;
    max_temp: number;
    min_temp: number;
    weather: string;
    feels_like: number;
}

const Card: FC<CardProps> = ({
    name,
    max_temp,
    min_temp,
    temp,
    weather,
    feels_like,
}) => {
    const capitalizeFirstLetter = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
    };
    const currentWeekDay = date.toLocaleDateString('en-US', options);

    return (
        <div className="card">
            <h1 className="card__title">{name}</h1>
            <div className="card__content">
                <div className="card__overcast">
                    <span className="card__overcast--accent">
                        {Math.floor(temp)}°
                    </span>
                    <p>{capitalizeFirstLetter(weather)}</p>
                </div>
                <div className="card__details">
                    <div className="card__details-top">
                        <p className="card__day">{currentWeekDay}</p>
                        <p className="card__temp"> {Math.floor(max_temp)}°</p>
                        <p className="card__feel"> {Math.floor(min_temp)}°</p>
                    </div>
                    <div className="card__details-bottom">
                        <p className="feels">
                            Feels like: {Math.floor(feels_like)}°
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
