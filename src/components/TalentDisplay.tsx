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
  type: string;
  totalATK: number;
}

export interface TalentDisplayState {}

const talentTypes = ["Normal Attack", "Elemental Skill", "Elemental Burst"];

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
            talentLvl={6}
          />
        ))}
      </ListGroup>
    );
  };

  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle tag="h5">
            {characters[this.props.character].talents[this.props.type].title}
          </CardTitle>

          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {talentTypes[0]}
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

          {this.renderSkill(
            this.props.type,
            this.props.character,
            this.props.totalATK
          )}

          <CardText className="mt-3">
            {
              characters[this.props.character].talents[this.props.type]
                .description
            }
          </CardText>
        </CardBody>
      </Card>
    );
  }
}

export default TalentDisplay;
