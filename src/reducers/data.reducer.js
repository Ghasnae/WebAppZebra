import { GET_DATA } from "../actions/data";

const initialState = {};

export default function recupData(state = initialState, action){
    switch(action.type){
        case GET_DATA:
            return action.payload;
        default: 
            return state;
    }
}