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
  "vasko4.png",
  "cecore3.png",
  "vanio3.png",
  "mitkot5.png"
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
  },
  {
    playerName: "Ceco_re",
    image: "cecore3_small.png",
    imagePool: "cecore_player.png"
  },
  {
    playerName: "Vanio_re",
    image: "vanio3_small.png",
    imagePool: "vanio_position.png"
  },
  {
    playerName: "Mitko T",
    image: "mitkot5_small.png",
    imagePool: "mitkot_player.png"
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
    let chance = Math.floor(Math.random() * 83);

    let newCharIndex = 0;
    console.log(chance);
    if (chance > 47 && chance <= 57) {
      newCharIndex = 0;
      //Rare silver
    } else if (chance > 37 && chance <= 47) {
      newCharIndex = 1;
      //Rare silver
    } else if (chance > 27 && chance <= 37) {
      newCharIndex = 2;
      //Rare silver
    } else if (chance == 2) {
      newCharIndex = 3;
      //TOTY
    } else if (chance > 12 && chance <= 17) {
      newCharIndex = 4;
      //inform silver
    } else if (chance > 7 && chance <= 12) {
      newCharIndex = 5;
      //inform silver
    } else if (chance == 1 || chance == 0) {
      newCharIndex = 6;
      //ICON
    } else if (chance > 57 && chance <= 77) {
      newCharIndex = 7;
      //silver
    } else if (chance > 17 && chance <= 27) {
      newCharIndex = 8;
      //silver rare
    } else if (chance > 2 && chance <= 7) {
      newCharIndex = 9;
      //inform silver
    } else if (chance > 77 && chance <= 80) {
      newCharIndex = 10;
      //inform gold
    } else if (chance > 80 && chance <= 82) {
      newCharIndex = 11;
      //Champs silver
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
