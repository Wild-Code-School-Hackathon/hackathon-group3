import React from 'react';

function CamsList(props) {
    const { name } = props
    console.log(name)
    return (
        <div>
            <p>{name}</p>
        </div>
    )
}
export default CamsList;
