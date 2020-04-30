import React from 'react';

function DropDown(props) {
  const { countriesList, handleChange } = props;
  return (
    <div>
      <select className='select-css' onChange={handleChange}>
        {countriesList.map((country) => (
          <option key={country.id} value={country.id}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDown;
