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
import { characters } from "../../data/characters/data";
import DamageDisplay from "./DamageDisplay";

export interface TalentDisplayProps {
  //character: string;
  //level: number;
  //type: string;
  //totalATK: number;
}

export interface TalentDisplayState {}

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

  renderSkill = (type: string, character: string, totalATK: number) => {
    return (
      <ListGroup>
        {Object.keys(characters[character][type]).map((skill) => (
          <DamageDisplay
            character={character}
            type={type}
            skill={skill}
            totalATK={totalATK}
            talentLvl={this.state.talentLvl}
          />
        ))}
      </ListGroup>
    );
  };

  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle tag="h5"></CardTitle>

          <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>

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

          {"hi"}

          <CardText className="mt-3"></CardText>
        </CardBody>
      </Card>
    );
  }
}

export default TalentDisplay;
