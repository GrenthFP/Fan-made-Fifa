import React from 'react';
import './App.css';
import Product from "./Product"
import bar from "./barbell.jpg";
import  bar2 from "./barbell2.jpg";
import Buttons from './Buttons';
import logo from "./logofit.png"

function App() {
  return (
    <div className="App">
      <div className="Banner">
      </div>
      <div className="Buttons">
        <img id="logo" src={logo}></img>
        <a href="lol">
          <h1 id="name">108cm.BircepsFitness</h1>
        </a>
        <div className="Buttonsbox">
          
          <Buttons text="Shtangi"/>
          <Buttons text="Stuff"/>
          <Buttons text="Info"/>
        </div>
      </div>
      <div className="Products">
        <Product img={bar} lift="150kg" text="20kg" text2="500kg" text3="200$"/>
        <Product img={bar2} lift="100kg" text="25kg" text2="750kg" text3="250$"/>
      </div>
      

    </div>
  );
}

export default App;
