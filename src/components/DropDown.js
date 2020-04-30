import React from 'react';

function DropDown(props) {
  const { optionsList, handleChange } = props;
  return (
    <div>
      <select className='select-css' onChange={handleChange}>
        {optionsList.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDown;
