import { GET_PONTE} from "../actions/data";

const initialState = {};

export default function recupPonte(state = initialState, action){
    switch(action.type){
        case GET_PONTE:
            return action.payload;
        default: 
            return state;
    }
}