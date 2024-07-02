import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div>
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
            </div>
        </nav>
    );
};

export default Navbar;
