import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import styled, {keyframes} from 'styled-components';


const CenterDiv = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    align-items:center;
    padding:0 20px;
`

const Card = styled.div`
    text-align:center;
    border-radius:10px;
    display:flex;
    align-items:center;
    width:90%;
    margin:5%;
    margin-top: 25%;
    padding:2%;
    color: white;    
    box-shadow:0px 0px 20px 0px black;
    background-color: rgba(25,24,23,0.5);
`

const Portrait = styled.img`
    width:30%;
    border-radius:50%;
    margin:20px;
   
`

const DevInfo = styled.div`
    display:flex;
    flex-direction:column;
    margin:10px;
    margin-left:20px;
    text-align:left;
    margin-right:5px;
`

const Name = styled.div`
    font-size: 190%;
`

const GitID = styled.div`
    font-size: 125%;
    margin-top:-30%;
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



const AboutMe = () => {
    const [developer, setDeveloper] = useState({})

    useEffect(() => {
        Axios
        .get('https://api.github.com/users/ruizaj13')
        .then(res => {
            setDeveloper(res.data)
            console.log(developer)
        })
        .catch(err => console.log(err.error))
    })

    return (
        <Animation>
            <CenterDiv>
                    <a href={developer.html_url} target='_blank' rel='noreferrer' style={{textDecoration: 'none'}}>
                    <Card>
                    <Portrait src={developer.avatar_url}/>
                    <DevInfo href='google.com'>
                        <Name><h3>{developer.name}</h3></Name>
                        <GitID><h4>GitHub: {developer.login}</h4></GitID>
                        <GitID><h4>Located: {developer.location}</h4></GitID>
                    </DevInfo>
                    </Card>
                    </a>
                </CenterDiv>
        </Animation>
    )
}

export default AboutMe;