import { GET_LISTPOISSON, DELETE_FILTRE, ADD_FILTRE } from "../actions/data";

const initialState = {};

export default function listpoisson (state = initialState, action){
    switch(action.type){
        case GET_LISTPOISSON:
            return action.payload;
        case DELETE_FILTRE:
            return state.filter((itemfiltre) => itemfiltre.id !== action.payload.itemfiltreId);
        case ADD_FILTRE:
            return [action.payload, ...state];
        default: 
            return state;
    }
}