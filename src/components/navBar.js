import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style-type: none;
    max-width: 100%;


    button {
        margin-top: 15%;
        background-color: rgba(247, 245, 245,0.2);
        color: white;
        font-size: 100%;
        padding: 5% 5%;
        border-radius: 10%;
        border-style: none;
        transition: 500ms;    
    }

    button:hover {
        font-size: 110%;
        transition: 500ms;    
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
        
            <StyledNav>
                 <Link to='/'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1280px-NASA_logo.svg.png' alt='nasa logo'/></Link>
                 <Link to='/ImageDesc'><button>Description</button></Link>
                 <Link to='/AboutMe'><button>Developer</button></Link>
            </StyledNav>
        
   )
}

export default NavBar;