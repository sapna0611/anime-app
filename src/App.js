import React, { useEffect, useState } from 'react';
import './style.css';
import Animes from './components/SearchPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from "./components/Navigation"
import Signin from "./components/Login"
import Signup from "./components/Signup"
import AnimeDetails from "./components/AnimeDetails"

export default function App() {
  const [data, setAnimes] = useState({});
  const getAnimeData = async () => {
    try {
      const res = await fetch('https://api.aniapi.com/v1/anime');
      const actualData = await res.json();
      console.log(actualData.data.documents);
      setAnimes(actualData.data.documents);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAnimeData();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Switch>
      <Route path="/anime/:id" component={AnimeDetails} /> 
      <Route  exact path='/anime'>  <Animes data={data} setAnimes={setAnimes} /></Route>
      <Route  exact path='/signup'> <Signup/> </Route>
        <Route  exact path='/login'> <Signin /> </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
