import "./App.css";

import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";

const player_pool = [
  "NIKE.png",
  "G.png",
  "ceco4.png",
  "99_1.png",
  "az4.png",
  "mitko_alt.png",
  "vaskoiconcard1.png",
  "nasiu3.png",
  "vasko4.png"
];
const player_pool_small = [
  {
    playerName: "niki",
    image: "NIKE2.png",
    imagePool: "position_niki.png"
  },
  {
    playerName: "gosho",
    image: "G3.png",
    imagePool: "position_G.png"
  },
  {
    playerName: "ceco",
    image: "ceco4_small.png",
    imagePool: "position_ceco.png"
  },
  {
    playerName: "99",
    image: "99_small.png",
    imagePool: "99_player.png"
  },
  {
    playerName: "Az",
    image: "az4_small.png",
    imagePool: "az_player.png"
  },
  {
    playerName: "Mitko",
    image: "mitko_alt_small.png",
    imagePool: "mitko_player.png"
  },
  {
    playerName: "Vasko Icon",
    image: "vaskoiconcard1_small.png",
    imagePool: "vaskoicon_player.png"
  },
  {
    playerName: "Nasiu",
    image: "nasiu3_small.png",
    imagePool: "nasiu_player.png"
  },
  {
    playerName: "Vasko",
    image: "vasko4_small.png",
    imagePool: "vasko_player.png"
  }
];

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

let createItem = () => {
  return { key: Math.random(), playerData: { imagePool: "empty card.png" } };
};

function App() {
  const [effects, set_effects] = useState([]);
  const [isOpenFromField, setIsOpenFromFieldt] = useState(false);
  const [stat, set_stat] = useState(false);
  const [draft, set_draft] = useState(false);
  const [player, set_player] = useState("");
  const [player_positions, set_player_positions] = useState(
    Array(11)
      .fill()
      .map(() => createItem())
  );

  const [small_players, set_small_players] = useState([]);

  const [chosen_player, set_chosen_player] = useState("");

  const handleAfterOpenFunc = () => {
    let chance = Math.floor(Math.random() * 100);

    let newCharIndex = 0;
    console.log(chance);
    if (chance > 43 && chance < 54) {
      newCharIndex = 0;
    } else if (chance > 54 && chance < 65) {
      newCharIndex = 1;
    } else if (chance > 65 && chance < 76) {
      newCharIndex = 2;
    } else if (chance == 98) {
      newCharIndex = 3;
    } else if (chance > 76 && chance < 87) {
      newCharIndex = 4;
    } else if (chance > 87 && chance < 98) {
      newCharIndex = 5;
    } else if (chance == 99) {
      newCharIndex = 6;
    } else if (chance < 32) {
      newCharIndex = 7;
    } else if (chance > 32 && chance < 43) {
      newCharIndex = 8;
    }

    set_player(player_pool[newCharIndex]);

    set_small_players([
      ...small_players,
      { key: Math.random(), playerData: player_pool_small[newCharIndex] }
    ]);

    set_stat(true);
    set_effects(["gif1_1.gif", "gif2.gif"]);
  };

  const close_func = () => {
    set_stat(false);
    set_effects([]);
  };

  const change = i => {
    set_draft(true);
    setIsOpenFromFieldt(true);
    set_chosen_player(i);
  };
  const changer = i => {
    set_draft(false);

    if (
      player_positions[chosen_player].playerData.imagePool == "empty card.png"
    ) {
      player_positions[chosen_player].playerData = small_players[i].playerData;
      small_players.splice(i, 1);
    } else {
      let areaItemBefore = { ...player_positions[chosen_player].playerData };

      player_positions[chosen_player].playerData = small_players[i].playerData;

      small_players[i].playerData = areaItemBefore;
    }

    set_small_players(small_players);
    set_player_positions(player_positions);
  };
  const openDraftNoClick = () => {
    set_draft(true);
    setIsOpenFromFieldt(false);
  };

  return (
    <div id="lmao">
      <h2 id="headline">
        LIMITED TIME:ULTRA RARE PLAYER AVAILABLE! 1% CHANCE FOR 90+!
      </h2>
      <h2 id="headline">EVENT: ECHOS OF THE PAST! VASKO's UPRISING!</h2>
      <img id="fieldcss" src="fieldche.png"></img>
      <button id="button1" onClick={handleAfterOpenFunc}>
        Open
      </button>
      <button id="btn2" onClick={() => openDraftNoClick()}>
        Club
      </button>
      <ReactModal
        ariaHideApp={false}
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
        ariaHideApp={false}
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
        <button onClick={() => set_draft(false)}>close</button>
        <div id="smallpl2">
          {small_players.map((small_player, i) => (
            <img
              key={small_player.key}
              src={small_player.playerData.image}
              onClick={!isOpenFromField ? null : () => changer(i)}
            ></img>
          ))}
        </div>
      </ReactModal>

      {player_positions.map((player_positions, i) => (
        <img
          key={player_positions.key}
          onClick={() => change(i)}
          src={player_positions.playerData.imagePool}
          id={ids[i]}
        ></img>
      ))}
      <div className="clearer"></div>
    </div>
  );
}

export default App;
