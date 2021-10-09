import React from 'react';
import { Link } from 'react-router-dom';
import profile from './git.png';
import './About.css';

export default function About() {

  return (
    <div className='profile'>
      <h2>&lt; mec-nyan /&gt;</h2>
      <div className='frame'>
        <img src={profile} alt='me' />
      </div>
      <h4>Web developer</h4>
      <h5>私わウェーブ颯ですーにゃ！</h5>
      <table>
        <tbody>
          <tr>
            <td>Cohorte:</td>
            <td>FT-16B</td>
          </tr>
          <tr>
            <td>Profesora:</td>
            <td>Wanda Cirone</td>
          </tr>
          <tr>
            <td>Modulo:</td>
            <td>M2</td>
          </tr>
          <tr>
            <td>Clase:</td>
            <td>09</td>
          </tr>
        </tbody>
      </table>
      <p>soyHenry.com</p>
    </div>
  );
}
