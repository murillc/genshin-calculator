import * as React from "react";
import { ListGroupItem } from "reactstrap";
import { characters } from "../../data/characters/data";

export interface DamageDisplayProps {
  character: string;
  type: string;
  skill: string;
  totalATK: number;
  talentLvl: number;
}

export interface DamageDisplayState {}

class DamageDisplay extends React.Component<
  DamageDisplayProps,
  DamageDisplayState
> {
  renderDescription = (type: string, character: string, skill: string) => {
    var returnString = "";

    // Add space and semicolon
    returnString += skill.replace(/_/g, " ");
    returnString += ": ";

    // turn from lower_case to Upper Case
    var splitStr = returnString.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    returnString = splitStr.join(" ");

    // Calculate Damage
    returnString += Math.round(
      this.calculateDamage(this.props.totalATK, this.findSkillPercent(), 0)
    );

    return returnString;
  };

  findSkillPercent = () => {
    return characters[this.props.character][this.props.type][this.props.skill][
      this.props.talentLvl
    ];
  };

  calculateDamage = (
    totalATK: number,
    abilityPercent: number,
    dmgBonusPercent: number
  ) => {
    return ((totalATK * abilityPercent) / 100) * (1 + dmgBonusPercent / 100);
  };

  render() {
    return (
      <ListGroupItem>
        {this.renderDescription(
          this.props.type,
          this.props.character,
          this.props.skill
        )}
      </ListGroupItem>
    );
  }
}

export default DamageDisplay;
