import * as React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from "reactstrap";

export interface SetBonusSelectorProps {}

const SetBonusSelector = (props: SetBonusSelectorProps) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

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
