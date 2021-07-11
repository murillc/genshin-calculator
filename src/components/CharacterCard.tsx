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
import CharacterSelector from "./CharacterSelector";
import Artifacts from "./Artifacts";

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

  return (
    <Container>
      <Row>
        <Col>
          <CharacterSelector
            character={character}
            level={level}
            changeCharacter={changeCharacter}
            changeLevel={changeLevel}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Artifacts />
        </Col>
      </Row>
    </Container>
  );
};

export default CharacterCard;
