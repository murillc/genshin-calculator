import * as React from "react";
import { Component, useState } from "react";
import {
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from "reactstrap";
import { characters, levels } from "../data/characters/data";

export interface CharacterSelectorProps {
  character: string;
  level: number;
  changeCharacter: any;
  changeLevel: any;
}

const CharacterSelector: React.FunctionComponent<CharacterSelectorProps> = ({
  character,
  level,
  changeCharacter,
  changeLevel,
}: CharacterSelectorProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const [levelDropdownOpen, setLevelDropdownOpen] = useState(false);
  const levelToggle = () => setLevelDropdownOpen((prevState) => !prevState);

  const [wepDropdownOpen, setWepDropdownOpen] = useState(false);
  const wepToggle = () => setWepDropdownOpen((prevState) => !prevState);

  const [wepLvlDropdownOpen, setwepLvlDropdownOpen] = useState(false);
  const wepLvlToggle = () => setwepLvlDropdownOpen((prevState) => !prevState);

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
                {levels.map((lvl, index) => (
                  <DropdownItem key={index} onClick={() => changeLevel(index)}>
                    {levels[index]}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </Col>

          <Col>
            <Dropdown isOpen={wepDropdownOpen} toggle={wepToggle}>
              <DropdownToggle caret>Weapons</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Primordial Jade Cutter</DropdownItem>
                <DropdownItem>The Black Sword</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>

          <Col>
            <Dropdown isOpen={wepLvlDropdownOpen} toggle={wepLvlToggle}>
              <DropdownToggle caret>Lvl</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>1</DropdownItem>
                <DropdownItem>90</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CharacterSelector;
