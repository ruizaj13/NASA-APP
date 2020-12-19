import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import ImageDesc from './components/ImageDesc';
import AboutMe from './components/AboutMe';
import { Route, Switch } from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';

const test = 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&h=650&w=940'

const GlobalStyle = createGlobalStyle`

  body{
    background: url(${test}) no-repeat center/cover fixed;
   
  }

`


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <NavBar/>
      <Switch>
        <Route exact path= '/' component={HomePage}/>
        <Route path= '/ImageDesc' component={ImageDesc}/>
        <Route patch= '/AboutMe' component={AboutMe}/>
      </Switch>
    </div>
  );
}

export default App;
