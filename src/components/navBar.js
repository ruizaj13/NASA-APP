import React from 'react';
import { Link } from 'react-router-dom'
import'../styles/NavBar.css'

const NavBar = () => {





    return ( 
        <div >
            <ul className='navLinks'>
                 <Link to='/'><li>logo</li></Link>
                 <Link to='/ImageDesc'><li>Info</li></Link>
                 <Link to='/AboutMe'><li>About</li></Link>
            </ul>
        </div>
   )
}

export default NavBar;