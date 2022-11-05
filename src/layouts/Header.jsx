import React from 'react';
import Navbar from '@components/Navbar';
import '../styles/Header.scss';

const Header = () => {
    return(
        <header className='header'>
            <Navbar />
        </header>
    )
};

export default Header;