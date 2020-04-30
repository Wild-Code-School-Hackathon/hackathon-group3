import React from 'react';
import { Link } from 'react-router-dom';


function CamsList(props) {
    const { name, id, selectCam, image } = props
    return (
        <div className='cam-list-card' onClick={() => selectCam(id)}>
            <Link to='/webcamPage'>
              <img src={image} alt={name}/>
              <p>{name}</p>
            </Link>
        </div>
    )
}
export default CamsList;
