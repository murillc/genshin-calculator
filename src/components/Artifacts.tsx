import * as React from "react";
import Artifact from "./Artifact";

export interface ArtifactsProps {}

const Artifacts: React.FunctionComponent<ArtifactsProps> = () => {
  return (
    <div>
      {["flower", "feather", "sands", "goblet", "circlet"].map((type) => (
        <Artifact artifactType={type} />
      ))}
    </div>
  );
};

export default Artifacts;
