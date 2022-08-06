import { GET_MORT } from "../actions/data";

const initialState = {};

export default function recupMort(state = initialState, action){
    switch(action.type){
        case GET_MORT:
            return action.payload;
        default: 
            return state;
    }
}