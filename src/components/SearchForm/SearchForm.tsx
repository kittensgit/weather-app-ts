import React, { FC, useState } from 'react';
import './SearchForm.scss';
import searchIcon from '../../images/search.png';

interface SearchForm {
    handleCityName: (city: string) => void;
}

const SearchForm: FC<SearchForm> = ({ handleCityName }) => {
    const [value, setValue] = useState<string>('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleCityName(value);
            setValue('');
        }
    };
    return (
        <div className="search">
            <img className="search__icon" src={searchIcon} alt="Search Icon" />
            <input
                className="search__input"
                value={value}
                onChange={handleChange}
                onKeyDown={handleEnter}
                placeholder="Search location..."
            />
        </div>
    );
};

export default SearchForm;
