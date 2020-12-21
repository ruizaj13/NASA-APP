import React, {useContext} from 'react';
import styled from 'styled-components';
import {ImgContext} from '../contexts/ImgContext';

const StyledDesc = styled.div`
    color: white;
`

const ImageDesc = () => {
    const {photoData} = useContext(ImgContext);



    return (
        <StyledDesc>
            <h2>{photoData.title}</h2>
        </StyledDesc>
    )
}

export default ImageDesc;