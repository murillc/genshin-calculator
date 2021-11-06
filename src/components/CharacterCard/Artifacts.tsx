import * as React from "react";
import Artifact from "./Artifact";

const Artifacts = () => {
  return (
    <div>
      {["flower", "feather", "sands", "goblet", "circlet"].map((type) => (
        <Artifact artifactType={type} />
      ))}
    </div>
  );
};

export default Artifacts;
