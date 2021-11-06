import { createSlice } from "@reduxjs/toolkit";

export type ArtifactState = {
  set: string,

}

const initialState: ArtifactState = {
  set: "Thundering Fury"
}


const artifactSlice = createSlice({
  name: 'artifact',
  initialState,
  reducers: {}
});

export default artifactSlice.reducer