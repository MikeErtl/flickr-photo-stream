import React from 'react';

import {
    //Nav, 
    Navbar, 
    //NavItem, 
    //NavDropdown, 
    //MenuItem, 
} from 'react-bootstrap';

/**
 * Top Navbar 
 */
const NavBar = () => {

    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
            <Navbar.Brand>
                <a href="">Flickr Photos Stream</a>
            </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
            </Navbar.Collapse>
        </Navbar>
    );                    
};

export default NavBar;
