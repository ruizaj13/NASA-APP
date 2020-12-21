import React, {useContext} from 'react';
import styled, {keyframes} from 'styled-components';
import {ImgContext} from '../contexts/ImgContext';

const StyledDesc = styled.div`
    color: white;
    text-align: center;
    margin-top: 10%;
    margin-left: 25%;
    padding: 2%;
    border-radius: 2%;
    width: 50%;
    height: auto;
    background-color: rgba(25,24,23,0.5);
    box-shadow:0px 0px 20px 0px black;

`
const kf = keyframes`
  100% {
    opacity: 1;
  }
`

const Animation = styled.div`
    opacity: 0;
    animation: ${kf} 1s ease-in-out forwards;

`

const ImageDesc = () => {
    const {photoData} = useContext(ImgContext);



    return (
        <Animation>
            <StyledDesc>
                <h2>{photoData.title}</h2>
                <p>{photoData.explanation}</p>
            </StyledDesc>
        </Animation>
    )
}

export default ImageDesc;