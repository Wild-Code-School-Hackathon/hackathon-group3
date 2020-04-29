import React from 'react';

function DropDown(props) {
    const { countriesList, handleChange } = props;
    return(
        <div>
            <select onChange={handleChange}>
                {countriesList.map(country => (
                    <option 
                key={country.id} value={country.name}>{country.name}</option>
                ))}
            </select>
        </div>
    );
}

export default DropDown;