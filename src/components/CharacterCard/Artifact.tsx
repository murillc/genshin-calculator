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
import SetSelector from "./Artifact/SetSelector";
import StatSelector from "./Artifact/StatSelector";

import sands from "../../data/assets/Item_Witch's_End_Time.png";
import feather from "../../data/assets/Item_Witch's_Ever-Burning_Plume.png";
import flower from "../../data/assets/Item_Witch's_Flower_of_Blaze.png";
import goblet from "../../data/assets/Item_Witch's_Heart_Flames.png";
import circlet from "../../data/assets/Item_Witch's_Scorching_Hat.png";
import { useAppSelector } from "../../app/hooks";

export interface ArtifactProps {
  artifactType: string;
}

const artifactTypes: { [key: string]: string } = {
  flower: "Flower of Life",
  feather: "Plume of Death",
  sands: "Sands of Eon",
  goblet: "Goblet of Eonothem",
  circlet: "Circlet of Logos",
};

const artifactPics: { [key: string]: string } = {
  flower: flower,
  feather: feather,
  sands: sands,
  goblet: goblet,
  circlet: circlet,
};

const Artifact = ({ artifactType }: ArtifactProps) => {
  const artifacts = useAppSelector((state) => state.artifact.artifacts);

  return (
    <Container className="mt-3 g-0">
      <Card>
        <Row className="g-2">
          <Col md="4">
            <CardImg
              top
              className="img-thumbnail"
              src={artifactPics[artifactType]}
              alt="yeah"
            />
          </Col>

          <Col md="8">
            <CardBody>
              <CardTitle tag="h5">{artifactTypes[artifactType]}</CardTitle>
              <Row>
                <Col>
                  <SetSelector
                    set={artifacts[artifactType].set}
                    type={artifactType}
                  />
                </Col>
                <Col>
                  <StatSelector
                    artifactType={artifactType}
                    stat={artifacts[artifactType].statType[0]}
                    id={0}
                  />
                </Col>
              </Row>
              <Row className="mt-2">
                {Array.from(Array(2).keys()).map((key) => (
                  <Col>
                    <StatSelector
                      artifactType={artifactType}
                      stat={artifacts[artifactType].statType[key + 1]}
                      id={key + 1}
                    />
                  </Col>
                ))}
              </Row>
              <Row className="mt-2">
                {Array.from(Array(2).keys()).map((key) => (
                  <Col>
                    <StatSelector
                      artifactType={artifactType}
                      stat={artifacts[artifactType].statType[key + 3]}
                      id={key + 3}
                    />
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
