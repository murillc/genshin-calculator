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
import { characters, levels, weapons } from "../../data/characters/data";
import { updateData } from "../../app/features/character/characterSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const CharacterSelector = () => {
  const character = useAppSelector((state) => state.character);

  const dispatch = useAppDispatch();
  // character.name,
  // character.level
  // [name, level]
  const handleSelectClick = (e) => {
    const selectData = {
      name: e.target.name,
      val: e.target.innerText,
    };
    dispatch(updateData(selectData));
    //console.log(e.target, e.target.name, e.target.innerText);
    //  dispatch(changeName(char)
  };
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
              <DropdownToggle caret>{character.character}</DropdownToggle>
              <DropdownMenu>
                {Object.keys(characters).map((char) => (
                  <DropdownItem
                    name="character"
                    key={char}
                    onClick={handleSelectClick}
                  >
                    {char}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </ButtonDropdown>

            <ButtonDropdown isOpen={levelDropdownOpen} toggle={levelToggle}>
              <DropdownToggle caret>{character.level}</DropdownToggle>
              <DropdownMenu>
                {levels.map((lvl, index) => (
                  <DropdownItem
                    name="level"
                    key={index}
                    onClick={handleSelectClick}
                  >
                    {levels[index]}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </ButtonDropdown>
          </Col>

          <Col>
            <ButtonDropdown isOpen={wepDropdownOpen} toggle={wepToggle}>
              <DropdownToggle caret>{character.weapon}</DropdownToggle>
              <DropdownMenu>
                {Object.keys(weapons).map((weapon: string) => (
                  <DropdownItem
                    name="weapon"
                    key={weapon}
                    onClick={handleSelectClick}
                  >
                    {weapon}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </ButtonDropdown>
            <ButtonDropdown isOpen={wepLvlDropdownOpen} toggle={wepLvlToggle}>
              <DropdownToggle caret>{character.wepLevel}</DropdownToggle>
              <DropdownMenu>
                {levels.map((lvl, index) => (
                  <DropdownItem
                    name="wepLevel"
                    key={index}
                    onClick={handleSelectClick}
                  >
                    {levels[index]}
                  </DropdownItem>
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
