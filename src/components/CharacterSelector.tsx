import * as React from "react";
import { useState } from "react";
import {
  ButtonDropdown,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from "reactstrap";
import { characters, levels, weapons } from "../data/characters/data";

export interface CharacterSelectorProps {
  character: string;
  level: number;
  weapon: string;
  wepLevel: number;
  changeCharacter: any;
  changeLevel: any;
}

const CharacterSelector: React.FunctionComponent<CharacterSelectorProps> = ({
  character,
  level,
  weapon,
  wepLevel,
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
      <Container className="g-0">
        <Row>
          <Col>
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
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
            </ButtonDropdown>
            <ButtonDropdown isOpen={levelDropdownOpen} toggle={levelToggle}>
              <DropdownToggle caret>{levels[level]}</DropdownToggle>
              <DropdownMenu>
                {levels.map((lvl, index) => (
                  <DropdownItem key={index} onClick={() => changeLevel(index)}>
                    {levels[index]}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </ButtonDropdown>
          </Col>

          <Col>
            <ButtonDropdown isOpen={wepDropdownOpen} toggle={wepToggle}>
              <DropdownToggle caret>{weapon}</DropdownToggle>
              <DropdownMenu>
                {Object.keys(weapons).map((weapon: string) => (
                  <DropdownItem key={weapon}>{weapon}</DropdownItem>
                ))}
              </DropdownMenu>
            </ButtonDropdown>
            <ButtonDropdown isOpen={wepLvlDropdownOpen} toggle={wepLvlToggle}>
              <DropdownToggle caret>{levels[wepLevel]}</DropdownToggle>
              <DropdownMenu>
                {levels.map((lvl, index) => (
                  <DropdownItem>{levels[index]}</DropdownItem>
                ))}
              </DropdownMenu>
            </ButtonDropdown>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CharacterSelector;
