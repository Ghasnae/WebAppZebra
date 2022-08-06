import { GET_SOUFFRANCE } from "../actions/data";

const initialState = {};

export default function recupSouffrance(state = initialState, action){
    switch(action.type){
        case GET_SOUFFRANCE:
            return action.payload;
        default: 
            return state;
    }
}