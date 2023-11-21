import React, { FC } from 'react';
import './SearchForm.scss';
import searchIcon from '../../images/search.png';

const SearchForm: FC = ({}) => {
    return (
        <div className="search">
            <img className="search__icon" src={searchIcon} alt="Search Icon" />
            <input className="search__input" placeholder="Search location..." />
        </div>
    );
};

export default SearchForm;
