import store from "../../store"
import { statType } from "../../../data/characters/data";
import * as data from "../../../data/characters/data";

export const getBaseStat = (stat: statType) => {
  const character = store.getState().character;

  switch (stat) {
    case "HP":
      return data[character.character].baseHP[data.levels[character.level]];
  }
}