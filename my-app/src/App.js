
import './App.css';
import React, { useState } from 'react';



let arrayppl=["Мила","Павел","Алекс","Макси","Божбо","Митко","Емил","Хан Кубрат","Наско"]
let arraypleaces=["Във фитнеса","На планина","В кауфланд","В кухнята","На морето","В Малта","В училище","В Западен парк","На магистралата"]
let arraydo=["Правят кекс",
  "Купуват мляко",
  "Бият цигани",
  "Бият шефа",
  "Ядат макарон",
  "Играят на набий мангала",
  "Получават коледния бонус",
  "Свирят на цигулка",
  "Гледат аниме"]

function App() {
  const [who, setWho] = useState("");
  const [who2, setWho2] = useState("");
  const [where, setWhere] = useState("");
  const [what, setwhat] = useState("");
  
  const gen = () =>{
    var itemppl = arrayppl[Math.floor(Math.random()*arrayppl.length)];
    var itemppl2 = arrayppl[Math.floor(Math.random()*arrayppl.length)];
    var itemplace = arraypleaces[Math.floor(Math.random()*arraypleaces.length)];
    var itemdo = arraydo[Math.floor(Math.random()*arraydo.length)];
    setWho(itemppl)
    setWho2(itemppl2)
    setWhere(itemplace)
    setwhat(itemdo)
    }
  return (
    <div className="App">
      <header>
        <button onClick={gen}>Trueee</button>
        {who} и {who2} {where} {what}
      </header>
    </div>
  );
}

export default App;
