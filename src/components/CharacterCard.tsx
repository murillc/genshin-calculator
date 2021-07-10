import * as React from "react";
import { Component, useState } from "react";

import { characters, levels } from "../data/characters/data";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Col,
  Row,
} from "reactstrap";

export interface CharacterCardProps {
  character: string;
  level: number;
  changeCharacter: any;
  changeLevel: any;
}

const CharacterCard = ({
  character,
  level,
  changeCharacter,
  changeLevel,
}: CharacterCardProps) => {
  // state = { :  }
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [levelDropdownOpen, setLevelDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const levelToggle = () => setLevelDropdownOpen((prevState) => !prevState);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>{character}</DropdownToggle>
              <DropdownMenu>
                {Object.keys(characters).map((char) => (
                  <DropdownItem
                    key={char}
                    onClick={() => changeCharacter(char)}
                  >
                    {char}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown isOpen={levelDropdownOpen} toggle={levelToggle}>
              <DropdownToggle caret>{levels[level]}</DropdownToggle>
              <DropdownMenu>
                {Object.keys(levels).map((lvl) => (
                  <DropdownItem key={lvl} onClick={() => changeLevel(lvl)}>
                    {levels[lvl]}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
        <Row>
          <Row>
            <Col>
              <p>
                <b>Base HP:</b> {characters[character].baseHP[level]}
              </p>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default CharacterCard;
