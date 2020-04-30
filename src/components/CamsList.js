import React from 'react';
import { Link } from 'react-router-dom';


function CamsList(props) {
    const { name, id, selectCam } = props
    console.log(name)
    return (
        <div>
            <p onClick={() => selectCam(id)}><Link to='/webcamPage'>{name}</Link></p>
        </div>
    )
}
export default CamsList;
