import { GET_ACCOUPLEMENT } from "../actions/data";

const initialState = {};

export default function recupAccouplement(state = initialState, action){
    switch(action.type){
        case GET_ACCOUPLEMENT:
            return action.payload;
        default: 
            return state;
    }
}