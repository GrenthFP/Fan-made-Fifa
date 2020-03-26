import React, { useState } from "react";
import "./App.css";

import ReactModal from "react-modal";

function App() {
  const [effects, set_effects] = useState([]);
  const [stat, set_stat] = useState(false);
  const [draft, set_draft] = useState(false);
  const [draft2, set_draft2] = useState(false);
  const [player, set_player] = useState("");
  const player_pool = ["NIKE.png", "G.png", "ceco4.png"];
  const player_pool_small = ["NIKE2.png", "G3.png", "ceco4_small.png"];
  const [small_players, set_small_players] = useState([]);
  const [paralel, set_paralel] = useState([]);
  const paralel_pool = [
    "position_niki.png",
    "position_G.png",
    "position_ceco.png"
  ];
  const [chosen_player, set_chosen_player] = useState("");
  const [player_positions, set_player_positions] = useState([
    "empty card.png",
    "empty card.png",
    "empty card.png",
    "empty card.png",
    "empty card.png",
    "empty card.png",
    "empty card.png",
    "empty card.png",
    "empty card.png",
    "empty card.png",
    "empty card.png"
  ]);
  const ids = [
    "card1",
    "card2",
    "card3",
    "card4",
    "card5",
    "card6",
    "card7",
    "card8",
    "card9",
    "card10",
    "card11"
  ];

  const handleAfterOpenFunc = () => {
    let chance = Math.floor(Math.random() * 3);
    if (chance == 0) {
      set_player(player_pool[0]);
      set_small_players([...small_players, player_pool_small[0]]);
      set_paralel([...paralel, paralel_pool[0]]);
    }
    if (chance == 1) {
      set_player(player_pool[1]);
      set_small_players([...small_players, player_pool_small[1]]);
      set_paralel([...paralel, paralel_pool[1]]);
    }
    if (chance == 2) {
      set_player(player_pool[2]);
      set_small_players([...small_players, player_pool_small[2]]);
      set_paralel([...paralel, paralel_pool[2]]);
    }
    set_stat(true);
    set_effects(["gif1_1.gif", "gif2.gif"]);
  };
  const close_func = () => {
    set_stat(false);
    set_effects([]);
  };
  const open_button_two = () => {
    set_draft(true);
  };
  const close_button_two = () => {
    set_draft(false);
  };
  const close_button_three = () => {
    set_draft2(false);
  };
  const change = i => {
    set_draft2(true);
    set_chosen_player(i);
  };
  const changer = i => {
    let test_array = player_positions;
    test_array[chosen_player] = paralel[i];
    set_player_positions(test_array);
    set_draft2(false);
  };

  return (
    <div id="lmao">
      <img id="fieldcss" src="fieldche.png"></img>
      <button id="button1" onClick={handleAfterOpenFunc}>
        Open
      </button>
      <button id="btn2" onClick={open_button_two}>
        Club
      </button>
      <ReactModal
        style={{
          overlay: { backgroundColor: "rgba(150, 200, 120, 0.75)" },
          content: {
            backgroundColor: "hsl(172, 100%, 48%)",
            width: "350px",
            height: "450px"
          }
        }}
        isOpen={stat}
        contentLabel={"Example Modal"}
      >
        <button onClick={close_func}>close</button>
        <img className="prop" id="jeko1" src={player}></img>
        <img className="prop" id="gif2" src={effects[1]}></img>
        <img className="prop" id="gif1" src={effects[0]}></img>
      </ReactModal>
      <ReactModal
        style={{
          overlay: { backgroundColor: "rgba(150, 200, 120, 0.75)" },
          content: {
            backgroundColor: "hsl(172, 100%, 48%)",
            width: "450px",
            height: "550px"
          }
        }}
        isOpen={draft}
        contentLabel={"Example Modal"}
      >
        <button onClick={close_button_two}>close</button>
        <div id="smallpl">
          {small_players.map((small_players, i) => (
            <img key={i} src={small_players}></img>
          ))}
        </div>
      </ReactModal>
      <ReactModal
        style={{
          overlay: { backgroundColor: "rgba(150, 200, 120, 0.75)" },
          content: {
            backgroundColor: "hsl(172, 100%, 48%)",
            width: "450px",
            height: "550px"
          }
        }}
        isOpen={draft2}
        contentLabel={"Example Modal"}
      >
        <button onClick={close_button_three}>close</button>
        {console.log(small_players)}
        <div id="smallpl">
          {small_players.map((small_players, i) => (
            <img key={i} src={small_players} onClick={() => changer(i)}></img>
          ))}
        </div>
      </ReactModal>
      {player_positions.map((player_positions, i) => (
        <img
          key={i}
          onClick={() => change(i)}
          src={player_positions}
          id={ids[i]}
        ></img>
      ))}
      <div class="clearer"></div>
    </div>
  );
}

export default App;