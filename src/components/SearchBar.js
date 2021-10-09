import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  const [mode, setMode] = useState('ON');

  function switchMode() {
    setMode(mode === 'ON' ? 'OFF' : 'ON');
    console.log('Mode is: ', mode);
  }

  // night or day mode
  return (
    <form className="bar" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("");
    }}>
      <label htmlFor="switch">
        <span className="toggle" onClick={switchMode}>
          <span className="circle"></span>
        </span>
      </label>
      <span className='mode'>nigth mode: {mode}</span>
      <input className="search" type="submit" value="Buscar" />
      <input
        className="field"
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
    </form>
  );
}
