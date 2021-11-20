// import * as React from "react";
// import { Component, useState } from "react";

// import { characters, levels } from "../data/characters/data";

import { Container, Col, Row } from "reactstrap";
import CharacterSelector from "./CharacterCard/CharacterSelector";
import Artifacts from "./CharacterCard/Artifacts";
import SetBonusSelector from "./CharacterCard/SetBonusSelector";

export interface CharacterCardProps {
  //  character: string;
  //  level: number;
  //  weapon: string;
  //  wepLevel: number;
  //  changeCharacter: any;
  //  changeLevel: any;
}

const CharacterCard = (props: CharacterCardProps) => {
  // state = { :  }

  return (
    <Container>
      <Row>
        <Col>
          <CharacterSelector />
        </Col>
      </Row>
      {/* <Row>
        <Col>
          <SetBonusSelector />
        </Col>
      </Row> */}
      <Row>
        <Col>
          <Artifacts />
        </Col>
      </Row>
    </Container>
  );
};

export default CharacterCard;
