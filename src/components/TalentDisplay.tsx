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
  ListGroup,
} from "reactstrap";
import { characters } from "../data/characters/data";
import DamageDisplay from "./DamageDisplay";

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

const renderSkill = (type: number, character: string) => {
  switch (type) {
    case 0:
      return (
        <ListGroup>
          {Object.keys(characters[character].normal_attack).map((skill) => (
            <DamageDisplay character={character} type={type} skill={skill} />
          ))}
        </ListGroup>
      );
    case 1:
      return (
        <ListGroup>
          {Object.keys(characters[character].skill).map((skill) => (
            <DamageDisplay character={character} type={type} skill={skill} />
          ))}
        </ListGroup>
      );
    case 2:
      return (
        <ListGroup>
          {Object.keys(characters[character].burst).map((skill) => (
            <DamageDisplay character={character} type={type} skill={skill} />
          ))}
        </ListGroup>
      );
    default:
      return (
        <ListGroup>
          {Object.keys(characters[character].burst).map((skill) => (
            <DamageDisplay character={character} type={type} skill={skill} />
          ))}
        </ListGroup>
      );
  }
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

          <Dropdown
            className="mb-3"
            isOpen={this.state.dropdownOpen}
            toggle={this.toggle}
          >
            <DropdownToggle caret>Talent {this.state.talentLvl}</DropdownToggle>
            <DropdownMenu>
              {Array.from(Array(10).keys()).map((num) => (
                <DropdownItem onClick={() => this.changeLevel(num + 1)}>
                  Level {num + 1}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>

          {renderSkill(this.props.type, this.props.character)}

          <CardText className="mt-3">
            {renderDescription(this.props.type, this.props.character)}
          </CardText>
        </CardBody>
      </Card>
    );
  }
}

export default TalentDisplay;
