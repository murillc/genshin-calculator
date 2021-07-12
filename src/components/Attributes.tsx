import * as React from "react";
import { Component } from "react";

import { Container, Row, Col } from "reactstrap";
import { characters } from "../data/characters/data";
import StatsDisplay from "./StatsDisplay";
import TalentDisplay from "./TalentDisplay";

export interface AttributesProps {
  character: string;
  level: number;
  weapon: string;
  wepLevel: number;
  baseATK: number;
  flatATK: number;
  percentATK: number;
}

export interface AttributesState {}

class Attributes extends Component<AttributesProps, AttributesState> {
  render() {
    return (
      <Container>
        <Row>
          <StatsDisplay />
        </Row>
        <Row className="gx-3 mt-3">
          {Array.from(Array(3).keys()).map((type) => (
            <Col>
              <TalentDisplay
                character={this.props.character}
                level={this.props.level}
                baseATK={this.props.baseATK}
                flatATK={this.props.flatATK}
                percentATK={this.props.percentATK}
                type={type}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Attributes;
