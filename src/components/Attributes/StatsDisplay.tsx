import * as React from "react";
import { Card, CardBody, CardText, CardTitle, Col, Row } from "reactstrap";
import {
  ArtifactState,
  SetState,
} from "../../app/features/artifact/artifactSlice";
import { CharacterState } from "../../app/features/character/characterSlice";
import { useAppSelector } from "../../app/hooks";
import * as data from "../../data/characters/data";

const calculateTotalHP = (character: CharacterState) => {
  const baseHP = data[character.character].baseHP[data.levels[character.level]];
};

const StatsDisplay = () => {
  const character = useAppSelector((state) => state.character);
  const artifact = useAppSelector((state) => state.artifact);

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h4">Main Stats</CardTitle>
          <CardText>
            <Row>
              <Col>
                <b>HP: </b>
                {}
                <br />
                <b>DEF: </b> 1000
                <br />
                <b>ER: </b> 1000
              </Col>
              <Col>
                <b>ATK: </b> 1000
                <br />
                <b>Crit Rate: </b> 1000
                <br />
                <b>Crit Dmg: </b> 1000
              </Col>
            </Row>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default StatsDisplay;
