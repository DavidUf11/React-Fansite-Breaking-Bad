import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import CharacterIndex from './components/CharacterIndex/CharacterIndexPage/CharacterIndex';
import FullHomePage from './components/FullHomePage/FullHomePage';
import GameStart from './components/LandingPage/Game/GameStart/GameStart';
import GameChoices from './components/LandingPage/Game/FullGame/GameChoices';
import AboutUs from './components/AboutUs/AboutUs';

import './App.css';
import CharacterFile from './components/CharacterFile/CharacterFile';

const App = () => {
  return (
    <div id="demo">
      <React.StrictMode>
        <BrowserRouter>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={FullHomePage} />
            <Route exact path="/characters" component={CharacterIndex} />
            <Route
              exact
              path="/character-file/:char_id"
              component={CharacterFile}
            />
            <Route exact path="/game-start" component={GameStart} />
            <Route exact path="/lets-play" component={GameChoices} />
            <Route exact path="/about-us" component={AboutUs} />
          </Switch>{' '}
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
};

export default App;
