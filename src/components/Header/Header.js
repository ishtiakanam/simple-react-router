import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle={
        fontWeight:'bold',
        color:'red'
    }
    return (
        <nav>
            <NavLink activeStyle={activeStyle} to = '/about'>About</NavLink>
            <NavLink activeStyle={activeStyle} to = '/friends'>Friends</NavLink>
            <NavLink activeStyle={activeStyle} to = '/notFound'>notFound</NavLink>
            <NavLink activeStyle={activeStyle} to = '/about/culture'>Culture</NavLink>
        </nav>
    );
};

export default Header;