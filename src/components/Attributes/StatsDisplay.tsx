import * as React from "react";
import { Card, CardBody, CardText, CardTitle, Col, Row } from "reactstrap";
import { useAppSelector } from "../../app/hooks";

const StatsDisplay = () => {
  const character = useAppSelector((state) => state.character);

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h4">Main Stats</CardTitle>
          <CardText>
            <Row>
              <Col>
                <b>HP: </b> {character.character}
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
