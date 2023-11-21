import React, { FC } from 'react';
import './Card.scss';

const Card: FC = ({}) => {
    return (
        <div className="card">
            <h1 className="card__title">New York</h1>
            <div className="card__content">
                <div className="card__overcast">
                    <span className="card__overcast--accent">61</span>
                    <p>Overcast</p>
                </div>
                <div className="card__details">
                    <div className="card__details-top">
                        <p className="card__day">Sun</p>
                        <p className="card__temp">63</p>
                        <p className="card__feel">57</p>
                    </div>
                    <div className="card__details-bottom">
                        <p className="quality">Air quality: 20 - Good</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
