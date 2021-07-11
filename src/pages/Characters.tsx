import * as React from "react";
import { Component } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import Attributes from "../components/Attributes";
import CharacterCard from "../components/CharacterCard";
import { characters } from "../data/characters/data";

export interface CharactersProps {}

export interface CharactersState {}

class Characters extends React.Component<CharactersProps, CharactersState> {
  state = {
    character: "Keqing",
    level: 0,
  };

  onClick = () => {
    console.log(this.state.character);
  };

  changeCharacter = (character: string) => {
    this.setState({ character: character });
  };

  changeLevel = (level: number) => {
    this.setState({ level: level });
  };

  render() {
    return (
      <Container>
        <Row className="mt-3 g-0">
          <Col sm>
            <CharacterCard
              character={this.state.character}
              level={this.state.level}
              changeCharacter={this.changeCharacter}
              changeLevel={this.changeLevel}
            />
          </Col>
          <Col sm>
            <Attributes
              character={this.state.character}
              level={this.state.level}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Characters;
