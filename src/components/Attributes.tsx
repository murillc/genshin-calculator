import * as React from "react";
import { Component } from "react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
export interface AttributesProps {}

export interface AttributesState {}

class Attributes extends React.Component<AttributesProps, AttributesState> {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>Damage Number</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Attributes;
