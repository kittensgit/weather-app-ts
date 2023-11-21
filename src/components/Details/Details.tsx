import React, { FC } from 'react';
import './Details.scss';

interface DetailsProps {
    feels_like: number;
    wind: number;
    humidity: number;
    visibility: number;
    pressure: number;
    sea: number;
}

const Details: FC<DetailsProps> = ({
    feels_like,
    humidity,
    pressure,
    visibility,
    sea,
    wind,
}) => {
    return (
        <div className="details">
            <h1 className="details__title">Weather details</h1>
            <div className="details__content">
                <div className="details__content-item">
                    <p className="details__item-title">Feels like</p>
                    <p>{Math.floor(feels_like)}</p>
                </div>
                <div className="details__content-item">
                    <p className="details__item-title">ENE wind</p>
                    <p>{wind} km/h</p>
                </div>
                <div className="details__content-item">
                    <p className="details__item-title">Humidity</p>
                    <p>{humidity}%</p>
                </div>
                <div className="details__content-item">
                    <p className="details__item-title">Sea level</p>
                    <p>{sea ? sea : '-'}</p>
                </div>
                <div className="details__content-item">
                    <p className="details__item-title">Visibility</p>
                    <p>{visibility} m</p>
                </div>
                <div className="details__content-item">
                    <p className="details__item-title">Pressure</p>
                    <p>{pressure} hPa</p>
                </div>
            </div>
        </div>
    );
};

export default Details;
