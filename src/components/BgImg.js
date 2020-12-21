import React, {useContext} from 'react';
import styled from 'styled-components';
import {ImgContext} from '../contexts/ImgContext';

const Image = styled.img`
  position: absolute; 
  top: 0; 
  left: 0; 
	
  width: 100%;
  height: auto;

  z-index: -1;

`


const Test = () => {
    const {photoData} = useContext(ImgContext)


    return(
        <div>
            <Image src={photoData.hdurl}/>
        </div>

    )
}

export default Test;