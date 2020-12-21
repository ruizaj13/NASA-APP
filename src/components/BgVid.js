import React, {useContext} from 'react';
import styled from 'styled-components';
import {ImgContext} from '../contexts/ImgContext';


const StyledVideo = styled.div `

  position: fixed; 
  top: 0; 
  left: 0; 
	
  width: 100%;
  height: 100%;

  z-index: -1;

`


const BgVid = () => {
    const {photoData} = useContext(ImgContext);
 




 
    return(
    <StyledVideo>
      <iframe frameBorder="0" height="100%" width="100%" allowFullScreen loop title={photoData.title} src={`${photoData.url}?&autoplay=1&loop=1&mute=1&showinfo=0`}/>
    </StyledVideo>
    )


}

export default BgVid;


// const [id, setId] = useState();

// const idCut = (url) => {
//     setId(url.split('d/')[1].substring(0,11))
// }

// useEffect(() => {
//   idCut(photoData.url) 

// }, [])


// playlist=${id}