import * as React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import SetSelector from "./SetSelector";
import StatSelector from "./StatSelector";

export interface ArtifactProps {
  artifactType: number;
}

const artifactTypes = [
  "Flower of Life",
  "Plume of Death",
  "Sands of Eon",
  "Goblet of Eonothem",
  "Circlet of Logos",
];

const Artifact: React.FunctionComponent<ArtifactProps> = ({
  artifactType,
}: ArtifactProps) => {
  return (
    <Container className="mt-3 g-0">
      <Card>
        <Row className="g-2">
          <Col md="4">
            <CardImg
              top
              className="img-thumbnail"
              src="https://cdn.discordapp.com/emojis/769775673861996635.png?v=1"
              alt="yeah"
            />
          </Col>

          <Col md="8">
            <CardBody>
              <CardTitle tag="h5">{artifactTypes[artifactType]}</CardTitle>
              <Row>
                <Col>
                  <SetSelector set="Thundering Fury" />
                </Col>
                <Col>
                  <StatSelector staticSelect={false} stat="HP" />
                </Col>
              </Row>
              <Row className="mt-2">
                {Array.from(Array(2).keys()).map((key) => (
                  <Col>
                    <StatSelector staticSelect={false} stat="HP" />
                  </Col>
                ))}
              </Row>
              <Row className="mt-2">
                {Array.from(Array(2).keys()).map((key) => (
                  <Col>
                    <StatSelector staticSelect={false} stat="HP" />
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Artifact;
