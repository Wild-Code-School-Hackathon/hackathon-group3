import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';


function Navbar() {
    return (
        <div>
            <NavBar>
                {/** Placeholder for the NavBar*/}
            NavBar
        </NavBar>
            <Content>
                {
                    /** show as content whatever we provide */
                    props.children
                }
            </Content>
        </div>;
    );
}

export default Navbar;
