import store from "../../store"

export type statType = 
  "HP"|
  "ATK"|
  "DEF"|
  "HP%"|
  "ATK%"|
  "DEF%"|
  "Elemental Mastery"|
  "Energy Recharge%"|
  "CRIT Rate%"|
  "CRIT DMG%"


export function sumStats(stat: statType): number {
  const artifacts = store.getState().artifact.artifacts;

  let sum = 0;

  for (const artifact in artifacts) {
    const artifactObj = artifacts[artifact];
    for (let i = 0; i < artifactObj.statType.length; i++) {
      if (artifactObj.statType[i] === stat) {
        sum += artifactObj.stats[i];
      }
    }
  }

  return sum;
}

