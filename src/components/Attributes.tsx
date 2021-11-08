import * as React from "react";

import { Container, Row, Col } from "reactstrap";
import StatsDisplay from "./Attributes/StatsDisplay";
import TalentDisplay from "./Attributes/TalentDisplay";

export interface AttributesProps {
  //character: string;
  //level: number;
  //weapon: string;
  //wepLevel: number;
  //baseATK: number;
  //flatATK: number;
  //percentATK: number;
}

export interface AttributesState {}

const Attributes = (props: AttributesProps) => {
  return (
    <Container>
      <Row>
        <StatsDisplay />
      </Row>
      <Row className="gx-3 mt-3">
        <Col>
          <TalentDisplay />
        </Col>
        <Col>
          <TalentDisplay />
        </Col>
        <Col>
          <TalentDisplay />
        </Col>
      </Row>
    </Container>
  );
};

//class Attributes extends Component<AttributesProps, AttributesState> {
//  calculateTotalATK = (
//    baseATK: number,
//    flatATK: number,
//    percentATK: number
//  ) => {
//    return baseATK * (1 + percentATK / 100) + flatATK;
//  };
//
//  render() {
//    return (
//      <Container>
//        <Row>
//          <StatsDisplay />
//        </Row>
//        <Row className="gx-3 mt-3">
//          <Col>
//            <TalentDisplay
//              character={this.props.character}
//              level={this.props.level}
//              totalATK={this.calculateTotalATK(
//                this.props.baseATK,
//                this.props.flatATK,
//                this.props.percentATK
//              )}
//              type="normal_attack"
//            />
//          </Col>
//          <Col>
//            <TalentDisplay
//              character={this.props.character}
//              level={this.props.level}
//              totalATK={this.calculateTotalATK(
//                this.props.baseATK,
//                this.props.flatATK,
//                this.props.percentATK
//              )}
//              type="skill"
//            />
//          </Col>
//          <Col>
//            <TalentDisplay
//              character={this.props.character}
//              level={this.props.level}
//              totalATK={this.calculateTotalATK(
//                this.props.baseATK,
//                this.props.flatATK,
//                this.props.percentATK
//              )}
//              type="burst"
//            />
//          </Col>
//        </Row>
//      </Container>
//    );
//  }
//}

export default Attributes;
