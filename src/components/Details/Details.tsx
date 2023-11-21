import React, { FC } from 'react';
import './Details.scss';

const Details: FC = ({}) => {
    return (
        <div className="details">
            <h1 className="details__title">Weather details</h1>
            <div className="details__content">
                <div className="details__content-item">
                    <p className="details__item-title">Feels like</p>
                    <p>57</p>
                </div>
                <div className="details__content-item">
                    <p className="details__item-title">ENE wind</p>
                    <p>13 mi/h</p>
                </div>
                <div className="details__content-item">
                    <p className="details__item-title">Humidity</p>
                    <p>82%</p>
                </div>
                <div className="details__content-item">
                    <p className="details__item-title">UV</p>
                    <p>0</p>
                </div>
                <div className="details__content-item">
                    <p className="details__item-title">Visibiliyt</p>
                    <p>7 mi</p>
                </div>
                <div className="details__content-item">
                    <p className="details__item-title">Pressure</p>
                    <p>1022 hPa</p>
                </div>
            </div>
        </div>
    );
};

export default Details;
