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
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

import hutao from "../data/characters/hutao/hutao.png";

export interface TalentDisplayProps {}

const TalentDisplay: React.FunctionComponent<TalentDisplayProps> = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Card>
      {/* <CardImg top width="100%" src={hutao} alt="Card image cap" /> */}
      <CardBody>
        <CardTitle tag="h5">Starward Sword</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          Elemental Burst
        </CardSubtitle>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>Talent Lvl</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>1</DropdownItem>
            <DropdownItem>4</DropdownItem>
            <DropdownItem>6</DropdownItem>
            <DropdownItem>8</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <CardText>
          Keqing unleashes the power of lightning, dealing Electro DMG in an
          AOE. She then blends into the shadow of her blade, striking a series
          of thunderclap-blows to nearby opponents simultaneously that deal
          multiple instances of Electro DMG. The final attack deals massive
        </CardText>
      </CardBody>
    </Card>
  );
};

export default TalentDisplay;
