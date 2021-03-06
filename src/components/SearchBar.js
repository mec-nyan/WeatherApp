import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  const [mode, setMode] = useState('OFF');

  function switchMode() {
    setMode(mode === 'OFF' ? 'ON' : 'OFF');
    console.log('Mode is: ', mode);
  }

  // night or day mode
  return (
    <form className="bar" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("");
    }}>
      <div className="daynight">
        <label htmlFor="switch">
          <span className="toggle" onClick={switchMode}>
            <span className="circle"></span>
          </span>
        </label>
        <span className='mode'>nigth mode: {mode}</span>
      </div>

      <div className="inputs">
        <input
          className="field"
          type="text"
          placeholder="Ciudad..."
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <input className="search" type="submit" value="Buscar" />
      </div>
    </form>
  );
}
