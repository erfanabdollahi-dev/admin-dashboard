import React from 'react';
import NavRight from './Nav-Right';
import NavLeft from './Nav-Left';
import './Navbar.css'
const Index = () => {
    return (
        <nav className="navbar">
            <NavRight/>
           <NavLeft/>
        </nav>
    );
}

export default Index;
