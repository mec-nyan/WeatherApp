import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Nav from '../components/Nav.js';
import Cards from '../components/Cards.js';
import About from '../components/About.js';
import Ciudad from '../components/Ciudad.js';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
const myKey = "6359f6589f21c2f3b4da8e6bdfb08f30";

function App() {
  const [ cities, setCities ] = useState([]);
  const [ modeSwitch, setModeSwitch ] = useState('on');

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${myKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }

  return (
    <div className="App big">

      <Route path='/'>
        <Nav onSearch={onSearch} />
      </Route>

      <Route exact path='/about'>
        <About/>
      </Route>

      <Route exact path='/'>
          <Cards
            cities={cities}
            onClose={onClose}
          />
      </Route>

    <Route exact path='/ciudad/:ciudadId' render = { ({ match }) => <Ciudad city={onFilter(match.params.ciudadId)}/> } />

    </div>
  );
}

export default App;
