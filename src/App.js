import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import {DateContext} from './contexts/DateContext';
import {ImgContext} from './contexts/ImgContext';
import NavBar from './components/navBar';
import HomePage from './components/HomePage';
import ImageDesc from './components/imageDesc';
import AboutMe from './components/aboutMe';
import BgImg from './components/BgImg';
import BgVid from './components/BgVid';

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



  return (
    <div className="App" >
      <NavBar/>
      <ImgContext.Provider value={{photoData}}>
      <Switch>
        <DateContext.Provider value={{date, setDate}}>
          <Route exact path= '/AboutMe' component={AboutMe}/>
          <Route exact path= '/ImageDesc' component={ImageDesc}/>
          <Route exact path= '/' component={HomePage}/>
        </DateContext.Provider>
      </Switch>
      {photoData.media_type === 'image' ? <BgImg/> : <BgVid/>}
      </ImgContext.Provider>

    </div>
  );
}

export default App;
