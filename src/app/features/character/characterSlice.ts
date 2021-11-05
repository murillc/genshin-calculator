import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CharacterWeapons =
  | "Favonious Sword"
  | "Lion's Roar"
  | "Mistsplitter";

export type CharLevel = "1" | "20" | "20A" | "40" | "40A" | "50" | 
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
  level: CharLevel | undefined;
  weapon: CharacterWeapons | undefined;
};


const initialState: CharacterState = {
    character: "Keqing",
    level: "1",
    weapon: undefined,
}

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    updateData(state, action: PayloadAction<any>) {
    const { payload : {name, val}} = action
      state[name] = val
    //   state.character = action.payload
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