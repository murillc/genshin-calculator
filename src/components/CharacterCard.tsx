// import * as React from "react";
// import { Component, useState } from "react";

// import { characters, levels } from "../data/characters/data";

import { Container, Col, Row } from "reactstrap";
import CharacterSelector from "./CharacterSelector";
import Artifacts from "./Artifacts";
import SetBonusSelector from "./SetBonusSelector";

export interface CharacterCardProps {
  character: string;
  level: number;
  weapon: string;
  wepLevel: number;
  changeCharacter: any;
  changeLevel: any;
}

const CharacterCard = (props: CharacterCardProps) => {
  // state = { :  }

  return (
    <Container>
      <Row>
        <Col>
          <CharacterSelector
            character={props.character}
            level={props.level}
            weapon={props.weapon}
            wepLevel={props.wepLevel}
            changeCharacter={props.changeCharacter}
            changeLevel={props.changeLevel}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <SetBonusSelector />
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
