import { createSlice } from "@reduxjs/toolkit";

export type ArtifactState = {
  set: string,
  type: string,
  statType: string[],
  stats: number[],
}

export type SetState = {
  artifacts: {
    flower: ArtifactState,
    feather: ArtifactState,
    sands: ArtifactState,
    goblet: ArtifactState,
    circlet: ArtifactState,
  },
}

const initialState: SetState = {
  artifacts: { 
    flower: {
      set: "Thundering Fury",
      type: "flower",
      statType: ["HP", "HP", "HP", "HP", "HP"],
      stats: [0, 0, 0, 0, 0],
    },
    feather: {
      set: "Thundering Fury",
      type: "feather",
      statType: ["HP", "HP", "HP", "HP", "HP"],
      stats: [0, 0, 0, 0, 0],
    },
    sands: {
      set: "Thundering Fury",
      type: "sands",
      statType: ["HP", "HP", "HP", "HP", "HP"],
      stats: [0, 0, 0, 0, 0],
    },
    goblet: {
      set: "Thundering Fury",
      type: "goblet",
      statType: ["HP", "HP", "HP", "HP", "HP"],
      stats: [0, 0, 0, 0, 0],
    },
    circlet: {
      set: "Thundering Fury",
      type: "circlet",
      statType: ["HP", "HP", "HP", "HP", "HP"],
      stats: [0, 0, 0, 0, 0],
    },
  },
}


const artifactSlice = createSlice({
  name: 'artifact',
  initialState,
  reducers: {}
});

export default artifactSlice.reducer