import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

    return (
        <nav>
            <Link to="/AddProduct">AddProduct</Link>
            <Link to="/AllProductsPage">AllProductsPage</Link>
            <Link to="/Login">Login</Link>
            <Link to="/Message">Message</Link>
            <Link to="/ProductPage">ProductPage</Link>
            <Link to="/ProfilePage">ProfilePage</Link>
            <Link to="/Signup">Signup</Link>
        </nav>
    )
}

export default Navbar