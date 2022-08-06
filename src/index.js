import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/index.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';


//redux
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { getAccouplement, getData, getListPoisson, getMort, getPonte, getSouffrance } from './actions/data';

const store = createStore(
  rootReducer, // combine reducer 
  composeWithDevTools(applyMiddleware(thunk))
);
store.dispatch(getData());
store.dispatch(getMort());
store.dispatch(getAccouplement());
store.dispatch(getPonte());
store.dispatch(getSouffrance());
store.dispatch(getListPoisson());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);