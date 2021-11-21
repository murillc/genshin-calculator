import * as React from "react";
import { Card, CardBody, CardText, CardTitle, Col, Row } from "reactstrap";
import {
  ArtifactState,
  SetState,
} from "../../app/features/artifact/artifactSlice";
import { CharacterState } from "../../app/features/character/characterSlice";
import { useAppSelector } from "../../app/hooks";
import * as data from "../../data/characters/data";
import * as artifactUtils from "../../app/features/artifact/artifactUtils";
import * as characterUtils from "../../app/features/character/characterUtils";

const StatsDisplay = () => {
  const character = useAppSelector((state) => state.character);

  const baseHP = data[character.character].baseHP[data.levels[character.level]];

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h4">Main Stats</CardTitle>
          <CardText>
            <Row>
              <Col>
                <b>HP: </b>
                {characterUtils.getBaseStat("HP") +
                  artifactUtils.sumStats("HP")}
                <br />
                <b>DEF: </b> {artifactUtils.sumStats("DEF")}
                <br />
                <b>ER: </b> {artifactUtils.sumStats("Energy Recharge%")}
              </Col>
              <Col>
                <b>ATK: </b> {artifactUtils.sumStats("ATK")}
                <br />
                <b>Crit Rate: </b> {artifactUtils.sumStats("CRIT Rate%")}
                <br />
                <b>Crit Dmg: </b> {artifactUtils.sumStats("CRIT DMG%")}
              </Col>
            </Row>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default StatsDisplay;
