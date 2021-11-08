import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CharacterWeapons =
  | "Favonious Sword"
  | "Lion's Roar"
  | "Mistsplitter";

export type Level = "1" | "20" | "20A" | "40" | "40A" | "50" | 
"50A" | 
"60" |
"60A" |
"70"|
"70A"|
"80"|
"80A"|
"90";

export type CharacterState = {
  character: string | undefined ;
  level: Level | undefined;
  weapon: CharacterWeapons | undefined;
  wepLevel: Level | undefined;
};


const initialState: CharacterState = {
    character: "Keqing",
    level: "80A",
    weapon: "Mistsplitter",
    wepLevel: "90",
}

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    updateData(state, action: PayloadAction<any>) {
      const { payload : {name, val}} = action
      state[name] = val
    },
  }
})

//const characterReducer = (state = initialState, action: Action) => {
//    switch (action.type) {
//        case 'CHANGE_CHARACTER' : {
//            return {
//                ...state,
//                characterName: action.payload
//            }
//        }
//        case 'CHANGE_LEVEL' : {
//          return {
//            ...state,
//            characterLevel: action.payload
//          }
//        }
//        default: {
//            return state;
//        }
//        
//    }
//}

export const { updateData } = characterSlice.actions
export default characterSlice.reducer