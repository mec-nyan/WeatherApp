import React from 'react';
import { NavLink } from 'react-router-dom';
import './Card.css';


export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className="out">
        <h5 className="city">{name}</h5>
        <div className="temp">
          <div className="min">
            <span>Min</span>
            <span>{min}°</span>
          </div>
          <div className="max">
            <span>Max</span>
            <span>{max}°</span>
          </div>      
        </div>
        <NavLink className='details' activeClassName='activeCityLink' to={`/ciudad/${id}`} >
          <span>Más info</span>
        </NavLink>

        <img className="img" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} alt="imagen del clima" />
        <button onClick={onClose} className="btn">cerrar</button>

    </div>
  );
};
