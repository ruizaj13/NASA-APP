import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
    max-width: 100%;

    button {
        margin-top: 15%;
        background-color: rgba(247, 245, 245,0.2);
        color: white;
        font-size: 125%;
        padding: 12% 30%;
        border-radius: 10%;
        border-style: none;
    }

    .info{
        margin-top: 14%;
        margin-left: 590%;
        padding-top: 11%;
        padding-bottom: 11%;

    }

    .about{
        margin-left: 200%;
    }

    img {
        position: absolute;
        margin-left: -15%;
        margin-top: -1.7%;
        height: 10%;
        width: auto;
    }
`

const NavBar = () => {

    return ( 
        <div>
            <StyledNav className='navLinks'>
                 <Link to='/'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1280px-NASA_logo.svg.png' alt='nasa logo'/></Link>
                 <Link to='/ImageDesc'><button className='info'>Description</button></Link>
                 <Link to='/AboutMe'><button className='about'>Developer</button></Link>
            </StyledNav>
        </div>
   )
}

export default NavBar;