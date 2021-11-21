import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

type SetPayload = {
  artifactType: string,
  set: string,
}

type StatTypePayload = {
  artifactType: string,
  statType: string,
  index: number,
}

type StatPayload = {
  artifactType: string,
  stat: number,
  index: number,
}

const artifactSlice = createSlice({
  name: 'artifact',
  initialState,
  reducers: {
    updateSet(state, action: PayloadAction<SetPayload>) {
      const {payload: {artifactType, set}} = action
      state.artifacts[artifactType].set = set
    },
    updateStatType(state, action: PayloadAction<StatTypePayload>) {
      const {payload: {artifactType, statType, index}} = action
      state.artifacts[artifactType].statType[index] = statType
    },
    updateStat(state, action: PayloadAction<StatPayload>) {
      const {payload: {artifactType, stat, index}} = action
      state.artifacts[artifactType].stats[index] = stat
    }
  }
});

export const { updateSet, updateStatType, updateStat} = artifactSlice.actions
export default artifactSlice.reducer