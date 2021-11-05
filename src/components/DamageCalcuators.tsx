import { NumberDecrementStepperProps } from "@chakra-ui/react";

export const damage = (
  baseDmg: number,
  dmgBonus: number,
  enemyDefense: number,
  enemyResistance: number,
  ampReactions: number
) => {
  return (
    baseDmg * (1 + dmgBonus) * enemyDefense * enemyResistance * ampReactions
  );
};

export const baseDamage = (
  talent: number,
  attackChar: number,
  attackWep: number,
  attackBonus: number,
  flatAttack: number
) => {
  var attack = (attackChar + attackWep) * (1 + attackBonus) + flatAttack;
  return talent * attack;
};

export const ampBonus = (EM: number, type: number) => {
  var bonus = 1 + (2.78 * EM) / (1400 + EM);
  if (type === 0) {
    return 1;
  } else if (type === 1) {
    return 1.5 * bonus;
  } else if (type === 2) {
    return 2 * bonus;
  }
};
