import React from 'react';
import './stylesheet/Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="top-bar">
                <input type="text" placeholder="Search..." className="search-input" />
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#podcast">Podcast</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </nav>
            </div>
            <div className="title">DESIGN FOR LIFE</div>
            <div className="image-placeholder">
                <img src='src/assets/design for life.jpg' alt="Decorative" />
            </div>
        </header>
    );
};

export default Header;




