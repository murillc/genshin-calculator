import * as React from "react";
import { useAppSelector } from "../../app/hooks";
import Artifact from "./Artifact";

const Artifacts = () => {
  const artifacts = useAppSelector((state) => state.artifact);
  return (
    <div>
      {["flower", "feather", "sands", "goblet", "circlet"].map((type) => (
        <Artifact artifactType={type} />
      ))}
    </div>
  );
};

export default Artifacts;
