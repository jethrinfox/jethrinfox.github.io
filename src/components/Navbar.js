import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav id="navbar">
            <div id="navbar-container">
                <div className="left-nav">
                    <Link to="/portfolio" >portfolio</Link>
                    <Link to="/about" >about</Link>
                </div>
                <div className="rigth-nav">
                    <Link to="/contact" >contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
