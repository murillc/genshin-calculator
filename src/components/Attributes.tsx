import * as React from "react";
import { Component } from "react";

import { Container, Row, Col } from "reactstrap";
import { characters } from "../data/characters/data";
import StatsDisplay from "./StatsDisplay";
import TalentDisplay from "./TalentDisplay";

export interface AttributesProps {
  character: string;
  level: number;
}

export interface AttributesState {}

class Attributes extends Component<AttributesProps, AttributesState> {
  calculateBaseOutGoing = (
    totalATK: number,
    percentAbility: number,
    percentDmgBonus: number
  ) => {
    return ((totalATK * percentAbility) / 100) * (1 + percentDmgBonus / 100);
  };

  render() {
    return (
      <Container>
        <Row>
          <StatsDisplay />
        </Row>
        <Row className="gx-3 mt-3">
          <Col>
            <TalentDisplay />
            <p>
              <b>Charged Attack: </b>{" "}
              {this.calculateBaseOutGoing(
                characters[this.props.character].baseATK[this.props.level],
                characters[this.props.character].charged[0],
                0
              )}
            </p>
          </Col>
          <Col>
            <TalentDisplay />
            <p>
              <b>Stellar Restoration: </b>{" "}
              {this.calculateBaseOutGoing(
                characters[this.props.character].baseATK[this.props.level],
                characters[this.props.character].charged[0],
                0
              )}
            </p>
          </Col>
          <Col>
            <TalentDisplay />
            <p>
              <b>Starward Sword: </b>{" "}
              {this.calculateBaseOutGoing(
                characters[this.props.character].baseATK[this.props.level],
                characters[this.props.character].charged[0],
                0
              )}
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Attributes;
