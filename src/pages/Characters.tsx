import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import Attributes from "../components/Attributes";
import CharacterCard from "../components/CharacterCard";
import { useSelector } from "react-redux";

export interface CharactersProps {}

const Characters = () => {
  const state = useSelector((state) => state);

  console.log(state);

  return (
    <Container>
      <Row className="mt-3 g-2">
        <Col sm>
          <CharacterCard />
        </Col>
        <Col sm>
          <Attributes />
        </Col>
      </Row>
    </Container>
  );
};

// class Characters extends React.Component<CharactersProps, CharactersState> {
//   state = {
//     character: "Keqing",
//     level: 8,
//     weapon: "Lion's Roar",
//     wepLevel: 11,
//     wepRefine: 4,
//     baseATK: 658,
//     percentATK: 0,
//     flatATK: 611,
//   };

//   changeCharacter = (character: string) => {
//     this.setState({ character: character });
//   };

//   changeLevel = (level: number) => {
//     this.setState({ level: level });
//   };

//   render() {
//     return (
//       <Container>
//         <Row className="mt-3 g-2">
//           <Col sm>
//             <CharacterCard
//               character={this.state.character}
//               level={this.state.level}
//               weapon={this.state.weapon}
//               wepLevel={this.state.wepLevel}
//               changeCharacter={this.changeCharacter}
//               changeLevel={this.changeLevel}
//             />
//           </Col>
//           <Col sm>
//             <Attributes
//               character={this.state.character}
//               level={this.state.level}
//               weapon={this.state.weapon}
//               wepLevel={this.state.wepLevel}
//               baseATK={this.state.baseATK}
//               flatATK={this.state.flatATK}
//               percentATK={this.state.percentATK}
//             />
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

export default Characters;
