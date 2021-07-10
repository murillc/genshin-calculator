import * as React from "react";
import { Component } from "react";
import Artifact from "./Artifact";

export interface ArtifactsProps {}

const Artifacts: React.FunctionComponent<ArtifactsProps> = () => {
  return (
    <div>
      <Artifact />
      <Artifact />
      <Artifact />
      <Artifact />
      <Artifact />
    </div>
  );
};

export default Artifacts;
