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
  "mitkot5.png",
  "AivanCARD.png",
  "Ivan_Stefanov.png",
  "Pesho_Yadkov.png",
  "pesho2.png"
];
const player_pool_small = [
  {
    big: "NIKE.png",
    playerName: "niki",
    image: "NIKE2.png",
    imagePool: "position_niki.png"
  },
  {
    big: "G.png",
    playerName: "gosho",
    image: "G3.png",
    imagePool: "position_G.png"
  },
  {
    big: "ceco4.png",
    big: "NIKE.png",
    playerName: "ceco",
    image: "ceco4_small.png",
    imagePool: "position_ceco.png"
  },
  {
    big: "99_1.png",
    playerName: "99",
    image: "99_small.png",
    imagePool: "99_player.png"
  },
  {
    big: "az4.png",
    playerName: "Az",
    image: "az4_small.png",
    imagePool: "az_player.png"
  },
  {
    big: "mitko_alt.png",
    playerName: "Mitko",
    image: "mitko_alt_small.png",
    imagePool: "mitko_player.png"
  },
  {
    big: "vaskoiconcard1.png",
    playerName: "Vasko Icon",
    image: "vaskoiconcard1_small.png",
    imagePool: "vaskoicon_player.png"
  },
  {
    big: "nasiu3.png",
    playerName: "Nasiu",
    image: "nasiu3_small.png",
    imagePool: "nasiu_player.png"
  },
  {
    big: "vasko4.png",
    playerName: "Vasko",
    image: "vasko4_small.png",
    imagePool: "vasko_player.png"
  },
  {
    big: "cecore3.png",
    playerName: "Ceco_re",
    image: "cecore3_small.png",
    imagePool: "cecore_player.png"
  },
  {
    big: "vanio3.png",
    playerName: "Vanio_re",
    image: "vanio3_small.png",
    imagePool: "vanio_position.png"
  },
  {
    big: "mitkot5.png",
    playerName: "Mitko T",
    image: "mitkot5_small.png",
    imagePool: "mitkot_player.png"
  },
  {
    big: "AivanCARD.png",
    playerName: "Aivan",
    image: "AivanCARD_small.png",
    imagePool: "aivan_position.png"
  },
  {
    big: "Ivan_Stefanov.png",
    playerName: "Ivan st",
    image: "Ivan_Stefanov_small.png",
    imagePool: "vankataa_position.png"
  },
  {
    big: "Pesho_Yadkov.png",
    playerName: "Pesho",
    image: "Pesho_Yadkov_small.png",
    imagePool: "pshoo_position.png"
  },
  {
    big: "pesho2.png",
    playerName: "Pesho2",
    image: "pesho2_small.png",
    imagePool: "pesho2_player.png"
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
let effectsArr = ["gif1_1.gif", "gif2.gif"];
function App() {
  const [toggle, set_toggle] = useState(false);
  const [bigid, set_bigid] = useState("jeko1");
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
    let effectsCopy = [...effectsArr];
    set_effects(effectsCopy);
    let chance = Math.floor(Math.random() * 110);

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
    } else if (chance > 57 && chance <= 70) {
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
    } else if (chance > 82 && chance <= 92) {
      newCharIndex = 12;
      //silver rare
    } else if (chance > 92 && chance <= 99) {
      newCharIndex = 13;
      //gold
    } else if (chance > 99 && chance <= 109) {
      newCharIndex = 14;
      //silver rare
    } else if (chance > 70 && chance <= 77) {
      newCharIndex = 15;
      //gold
    }

    set_player(player_pool[newCharIndex]);

    set_small_players([
      ...small_players,
      { key: Math.random(), playerData: player_pool_small[newCharIndex] }
    ]);

    set_stat(true);
  };

  const close_func = () => {
    set_stat(false);

    set_effects([]);
    set_bigid("jeko1");
    if (toggle == true) {
      set_draft(true);
    }
    set_toggle(false);
  };

  const change = i => {
    set_draft(true);
    setIsOpenFromFieldt(true);
    set_chosen_player(i);
  };
  const changer = i => {
    set_draft(false);
    console.log(i);
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
  const review = src => {
    set_effects([]);
    console.log(effects);
    set_bigid("jeko2");
    set_draft(false);
    console.log(src);
    console.log(src.playerData.big);
    set_player(src.playerData.big);
    set_stat(true);
    set_toggle(true);
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
        <img className="prop" id={bigid} src={player}></img>

        <img
          style={{ display: !!effects[1] ? "" : "none" }}
          className="prop"
          id="gif1"
          src={effects[1]}
        ></img>
        <img
          style={{ display: !!effects[0] ? "" : "none" }}
          className="prop"
          id="gif2"
          src={effects[0]}
        ></img>
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
              onClick={
                !isOpenFromField ? () => review(small_player) : () => changer(i)
              }
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
