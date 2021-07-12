import { render } from "@testing-library/react";
import * as React from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { characters } from "../data/characters/data";

export interface TalentDisplayProps {
  character: string;
  level: number;
  type: number;
  baseATK: number;
  percentATK: number;
  flatATK: number;
}

export interface TalentDisplayState {}

const talentTypes = ["Normal Attack", "Elemental Skill", "Elemental Burst"];

const renderTitle = (type: number, character: string) => {
  switch (type) {
    case 0:
      return characters[character].talents.normal_attack.title;
    case 1:
      return characters[character].talents.skill.title;
    case 2:
      return characters[character].talents.burst.title;
    default:
      return "N/A";
  }
};

const renderDescription = (type: number, character: string) => {
  switch (type) {
    case 0:
      return characters[character].talents.normal_attack.description;
    case 1:
      return characters[character].talents.skill.description;
    case 2:
      return characters[character].talents.burst.description;
    default:
      return "N/A";
  }
};

const calculateBaseOutgoing = (
  ability: number,
  baseATK: number,
  flatATK: number,
  percentATK: number
) => {
  var ATK = baseATK * (1 + percentATK) + flatATK;
  return ATK * (ability / 100);
};

class TalentDisplay extends React.Component<
  TalentDisplayProps,
  TalentDisplayState
> {
  state = {
    dropdownOpen: false,
    talentLvl: 4,
  };

  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };

  changeLevel = (level: number) => {
    this.setState({ talentLvl: level });
  };

  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle tag="h5">
            {renderTitle(this.props.type, this.props.character)}
          </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {talentTypes[this.props.type]}
          </CardSubtitle>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>Talent {this.state.talentLvl}</DropdownToggle>
            <DropdownMenu>
              {Array.from(Array(10).keys()).map((num) => (
                <DropdownItem onClick={() => this.changeLevel(num + 1)}>
                  Level {num + 1}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>

          <CardText>
            {calculateBaseOutgoing(
              characters[this.props.character].normal_attack.charged[
                this.state.talentLvl
              ],
              this.props.baseATK,
              this.props.flatATK,
              this.props.percentATK
            )}
          </CardText>

          <CardText>
            {renderDescription(this.props.type, this.props.character)}
          </CardText>
        </CardBody>
      </Card>
    );
  }
}

export default TalentDisplay;
