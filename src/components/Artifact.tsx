import * as React from "react";
import { Component } from "react";
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
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  InputGroup,
  InputGroupButtonDropdown,
  Row,
} from "reactstrap";
import StatSelector from "./StatSelector";

export interface ArtifactProps {}

const Artifact: React.FunctionComponent<ArtifactProps> = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card>
              <Row className="no-gutters">
                <Col md="4">
                  <CardImg
                    top
                    width="100%"
                    src="https://cdn.discordapp.com/emojis/769775673861996635.png?v=1"
                    alt="Card image cap"
                  />
                </Col>

                <Col md="8">
                  <CardBody>
                    <CardTitle tag="h5">Plume of Death</CardTitle>
                    <Row>
                      <Col>Thundering Fury</Col>
                      <Col>
                        <StatSelector />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <StatSelector />
                      </Col>
                      <Col>
                        <StatSelector />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <StatSelector />
                      </Col>
                      <Col>
                        <StatSelector />
                      </Col>
                    </Row>
                  </CardBody>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Artifact;
