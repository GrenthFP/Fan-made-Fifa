import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./characters.js";
import characters from "./characters.js";

function App() {
  const [hp_ally_char_1, set_ally_hp_char_1] = useState(100);
  const [hp_enemy_char_1, set_enemy_hp_char_1] = useState(100);
  let chars = [{ name: "Ichigo", id: 1 }];
  let buffed_dmg_char_one = 0;
  let buffed_dmg_char_two = 0;
  let buffed_dmg_char_three = 0;
  let character_one_buffs = [];

  const Calculate = (character_num, ability_num) => {
    let char = chars[character_num];
    let index = characters.find(
      element => element.char_ref == char.id && element.order == ability_num
    );
    if (index.type == "damage_single_target") {
      if (character_num == 0) {
        damage_single_target(index.damage, buffed_dmg_char_one);
      }
      if (character_num == 1) {
        damage_single_target(index.damage, buffed_dmg_char_two);
      }
      if (character_num == 2) {
        damage_single_target(index.damage, buffed_dmg_char_three);
      }
    }
    if (index.type == "buff_self_dmg") {
      buff_self(index.name, index.duration);
    }

    for (let i = 1; i < character_one_buffs.length; i = i + 2) {
      if (character_one_buffs[i] == 0) {
        character_one_buffs.pop(character_one_buffs[i]);
        character_one_buffs.pop(character_one_buffs[i - 1]);
      } else {
        character_one_buffs[i] = character_one_buffs[i] - 1;
      }
    }
    buffed_dmg_char_one = 0;
    for (let i = 0; i < character_one_buffs.length; i = i + 2) {
      let buff = characters.find(
        element => element.name == character_one_buffs[i]
      );
      buffed_dmg_char_one = buffed_dmg_char_one + buff.bonus_dmg;
    }
  };
  let damage_single_target = (damage, buffed_dmg) => {
    set_enemy_hp_char_1(hp_enemy_char_1 - (damage + buffed_dmg));
  };
  let buff_self = (name, duration) => {
    character_one_buffs.push(name);
    character_one_buffs.push(duration);
  };

  return (
    <div id="main_panel">
      <div id="ally_characters">
        <div id="ally_character_one">
          <img className="Character_pic" src="Kurosaki_ichigo.jpg"></img>
          <label className="label_hp">{hp_ally_char_1}</label>
          <div className="label_hp_size"></div>
          <img
            className="Character_ability"
            onClick={() => Calculate(0, 1)}
            src="Zangetsu_slash.jpg"
          ></img>
          <img
            className="Character_ability"
            onClick={() => Calculate(0, 2)}
            src="Hollow_slayer.jpg"
          ></img>
          <img
            className="Character_ability"
            onClick={() => Calculate(0, 3)}
            src="Zangetsu_power_fusion.jpg"
          ></img>
          <img className="Character_ability" src="Zangetsu_defense.jpg"></img>
        </div>
        <div id="ally_character_two">
          <img className="Character_pic"></img>
        </div>
        <div id="ally_character_three">
          <img className="Character_pic"></img>
        </div>
      </div>
      <div id="enemy_characters">
        <div id="enemy_character_one">
          <img className="Character_pic" src="Pre_ascension_aizen.jpg"></img>
          <label className="label_hp">{hp_enemy_char_1}</label>
          <div className="label_hp_size"></div>
        </div>
        <div id="enemy_character_two">
          <img className="Character_pic"></img>
        </div>
        <div id="enemy_character_three">
          <img className="Character_pic"></img>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
