import * as React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";

export interface SetBonusSelectorProps {}

const SetBonusSelector = (props: SetBonusSelectorProps) => {
  return (
    <Container className="g-0">
      <Card className="mt-3">
        <CardBody>
          <Row>
            <Col>
              <CardTitle tag="h5">4pc Thundering Fury</CardTitle>
            </Col>
            <Col>
              <CardText>
                Increases damage caused by Overloaded, Electro-Charged and
                Superconduct by 40%. Triggering such effects decreases Elemental
                Skill CD by 1s. Can only occur once every 0.8s.
              </CardText>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default SetBonusSelector;
