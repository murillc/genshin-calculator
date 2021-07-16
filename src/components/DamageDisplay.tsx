import { BreadcrumbLink } from "@chakra-ui/react";
import * as React from "react";
import { ListGroupItem } from "reactstrap";
import { characters } from "../data/characters/data";

export interface DamageDisplayProps {
  character: string;
  type: number;
  skill: string;
}

export interface DamageDisplayState {}

const renderDescription = (type: number, character: string, skill: string) => {
  var returnString = "";

  returnString += skill.replace(/_/g, " ");
  returnString += ": ";

  var splitStr = returnString.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  returnString = splitStr.join(" ");

  returnString += calculateDamage();

  return returnString;
};

const calculateDamage = () => {
  return 100;
};

class DamageDisplay extends React.Component<
  DamageDisplayProps,
  DamageDisplayState
> {
  render() {
    return (
      <ListGroupItem>
        {renderDescription(
          this.props.type,
          this.props.character,
          this.props.skill
        )}
      </ListGroupItem>
    );
  }
}

export default DamageDisplay;
