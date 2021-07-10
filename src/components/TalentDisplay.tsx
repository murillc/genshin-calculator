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
} from "reactstrap";

export interface TalentDisplayProps {}

const TalentDisplay: React.FunctionComponent<TalentDisplayProps> = () => {
  return (
    <Card>
      <CardImg
        top
        width="100%"
        src="../data/characters/hutao/hutao.png"
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle tag="h5">Card title</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          Card subtitle
        </CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
};

export default TalentDisplay;
