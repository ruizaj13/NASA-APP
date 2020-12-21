import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import ImageDesc from './components/ImageDesc';
import AboutMe from './components/AboutMe';
import {DateContext} from './contexts/DateContext';
import {ImgContext} from './contexts/ImgContext';

const d = new Date();

const initialDate = d.getFullYear() + '-'
  + ('0' + (d.getMonth() + 1)).slice(-2) + '-'
  + ('0' + d.getDate()).slice(-2);

const App = () => {
  const [photoData, setPhotoData] = useState('')
  const [date, setDate] = useState(initialDate);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=UEjdgxky6aSdcQGKFoSSkoAPSOyZmCw9Re7dZF2k&date=${date}`)
      .then(res => {
        setPhotoData(res.data)
      })
  }, [date])


  const GlobalStyle = createGlobalStyle`
  body{
    background-image: url(${photoData.hdurl}) ;
    background-size: 100% 100vh; 
  }
  `

  return (
    <div className="App">
      <GlobalStyle/>
      <NavBar/>
      <Switch>
        <DateContext.Provider value={{date, setDate}}>
        <ImgContext.Provider value={{photoData}}>
          <Route exact path= '/' component={HomePage}/>
          <Route path= '/ImageDesc' component={ImageDesc}/>
          <Route path= '/AboutMe' component={AboutMe}/>
        </ImgContext.Provider>
        </DateContext.Provider>
      </Switch>
    </div>
  );
}

export default App;
