import { combineReducers } from "redux";
import recupData from "./data.reducer";
import recupMort from "./mort.reducer";
import recupAccouplement from "./accouplement.reducer";
import recupSouffrance from "./souffrance.reducer";
import recupPonte from "./ponte.reducer";
import listpoisson from "./listpoisson.reducer";
 

export default combineReducers({ //somme de tout les reducers ensembles créer le store
    recupData,
    recupMort,
    recupAccouplement,
    recupSouffrance,
    recupPonte,
    listpoisson
});