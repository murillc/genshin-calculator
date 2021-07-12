import * as React from "react";
import Artifact from "./Artifact";

export interface ArtifactsProps {}

const Artifacts: React.FunctionComponent<ArtifactsProps> = () => {
  return (
    <div>
      {Array.from(Array(5).keys()).map((type) => (
        <Artifact artifactType={type} />
      ))}
    </div>
  );
};

export default Artifacts;
