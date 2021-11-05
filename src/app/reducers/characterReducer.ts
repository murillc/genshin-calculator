
import {Action} from '../types'

export type CharacterWeapons =
  | "Favonious Sword"
  | "Lion's Roar"
  | "Mistsplitter";

type CharLevel = "1" | "20" | "20A" | "40" | "40A" | "50" | 
"50A" | 
"60" |
"60A" |
"70"|
"70A"|
"80"|
"80A"|
"90"

 
export type CharacterState = {
  character: string | undefined ;
  level: CharLevel | undefined;
  weapon: CharacterWeapons | undefined;
};


const initialState: CharacterState = {
    character: undefined,
    level: undefined,
    weapon: undefined,
}

const characterReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'CHANGE_CHARACTER' : {
            return {
                ...state,
                characterName: action.payload
            }
        
         }
         default: {
            return state;
          }
        
    }
}


export default characterReducer