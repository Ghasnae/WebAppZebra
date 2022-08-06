import axios from "axios";

export const GET_DATA = "GET_DATA";
export const GET_MORT = "GET_MORT";
export const GET_ACCOUPLEMENT = "GET_ACCOUPLEMENT";
export const GET_PONTE = "GET_PONTE";
export const GET_ACTION = "GET_ACTION";
export const GET_SOUFFRANCE = "GET_SOUFFRANCE";
export const GET_LISTPOISSON = "GET_LISTPOISSON";
export const DELETE_FILTRE = "DELETE_FILTRE";
export const ADD_FILTRE = "ADD_FILTRE";

export const getAccouplement = () => {
  return (dispatch) => {
    return (
      axios
        // 1 - Demandes ou modifier ou supprime de la donnée en BDD
        .get(
          "https://script.google.com/macros/s/AKfycbzyO0qunfUbjuwUgbIUEI4EF_TL9QD1VUeTqjIM3bAi8sLF5sOrHlZAKd103SKww9V7/exec?action=getItems"
        )
        // 1 - On dit au reducer la donnée recup tu va nous la mettre dans le store
        .then((res) => {
          dispatch({
            type: GET_ACCOUPLEMENT, // Dans le reducer on va dire quand tu ressois tels données (switch) tu feras le comportement suivant
            payload: res.data, // transport : envois de donnée
          });
        })
        .catch((err) => console.log(err))
    );
  };
};

export const getData = () => {
  return (dispatch) => {
    return (
      axios
        // 1 - Demandes ou modifier ou supprime de la donnée en BDD
        .get(
          "https://script.google.com/macros/s/AKfycbzPz0iCKyGsNXDzTKUukzhiITCPs-m487ZiG3MzIdwIwRKuxzx5EafhHFVHf5H9JCitMw/exec?action=getItems"
        )
        // 1 - On dit au reducer la donnée recup tu va nous la mettre dans le store
        .then((res) => {
          dispatch({
            type: GET_DATA, // Dans le reducer on va dire quand tu ressois tels données (switch) tu feras le comportement suivant
            payload: res.data, // transport : envois de donnée
          });
        })
        .catch((err) => console.log(err))
    );
  };
};

export const getMort = () => {
  return (dispatch) => {
    return (
      axios
        // 1 - Demandes ou modifier ou supprime de la donnée en BDD
        .get(
          "https://script.google.com/macros/s/AKfycbxl8elTIbwhDiR94F5WE51T9lPRbkvBlfj8a-SEb4H1P5u4qh7RjqnG7AKTKXDujAmq6Q/exec?action=getItems"
        )
        // 1 - On dit au reducer la donnée recup tu va nous la mettre dans le store
        .then((res) => {
          dispatch({
            type: GET_MORT, // Dans le reducer on va dire quand tu ressois tels données (switch) tu feras le comportement suivant
            payload: res.data, // transport : envois de donnée
          });
        })
        .catch((err) => console.log(err))
    );
  };
};

export const getPonte = () => {
  return (dispatch) => {
    return (
      axios
        // 1 - Demandes ou modifier ou supprime de la donnée en BDD
        //.get('https://script.google.com/macros/s/AKfycbzml5ClR3440e1kuiaDlZKrq-U5lRsXxDQeyaH0cnjJuxts6H2XZl3EMLeVDETm1Z0c/exec?action=getItems')
        .get(
          "https://script.google.com/macros/s/AKfycbwp3UhDB_londqV5voVHAXzFKlYvcXQ65E1B0oAF_Ffy9MlKoL-LnQ5lcxlL06gII-b/exec?action=getItems"
        )
        // 1 - On dit au reducer la donnée recup tu va nous la mettre dans le store
        .then((res) => {
          dispatch({
            type: GET_PONTE, // Dans le reducer on va dire quand tu ressois tels données (switch) tu feras le comportement suivant
            payload: res.data, // transport : envois de donnée
          });
        })
        .catch((err) => console.log(err))
    );
  };
};

export const getAction = () => {
  return (dispatch) => {
    return (
      axios
        // 1 - Demandes ou modifier ou supprime de la donnée en BDD
        .get(
          "https://script.google.com/macros/s/AKfycbzCm7Qr9rLjXNX1uc5ayH78l72NFj0NEX56-7A-axdAAi6IHDbxMpyg894Y10Gq9jLL/exec?action=getItems"
        )
        // 1 - On dit au reducer la donnée recup tu va nous la mettre dans le store
        .then((res) => {
          dispatch({
            type: GET_ACTION, // Dans le reducer on va dire quand tu ressois tels données (switch) tu feras le comportement suivant
            payload: res.data, // transport : envois de donnée
          });
        })
        .catch((err) => console.log(err))
    );
  };
};

export const getSouffrance = () => {
  return (dispatch) => {
    return (
      axios
        // 1 - Demandes ou modifier ou supprime de la donnée en BDD
        .get(
          "https://script.google.com/macros/s/AKfycbz09JdLAege5Q34uhWQfOEsHPs09HsDhSmbytbeGUBBxnRaQAvSl3sGSFJq-3VfHUN_/exec?action=getItems"
        )
        // 1 - On dit au reducer la donnée recup tu va nous la mettre dans le store
        .then((res) => {
          dispatch({
            type: GET_SOUFFRANCE, // Dans le reducer on va dire quand tu ressois tels données (switch) tu feras le comportement suivant
            payload: res.data, // transport : envois de donnée
          });
        })
        .catch((err) => console.log(err))
    );
  };
};

export const getListPoisson = () => {
  return (dispatch) => {
    return (
      axios
        // 1 - Demandes ou modifier ou supprime de la donnée en BDD
        .get("http://localhost:3000/listFiltre")
        // 1 - On dit au reducer la donnée recup tu va nous la mettre dans le store
        .then((res) => {
          dispatch({
            type: GET_LISTPOISSON, // Dans le reducer on va dire quand tu ressois tels données (switch) tu feras le comportement suivant
            payload: res.data, // transport : envois de donnée
          });
        })
        .catch((err) => console.log(err))
    );
  };
};

export const deleteFiltre = (itemfiltreId) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `http://localhost:3000/listFiltre/${itemfiltreId}`,
    })
      .then(() => {
        dispatch({ type: DELETE_FILTRE, payload: { itemfiltreId } });
      })
      .catch((err) => console.log(err));
  };
};

export const addFiltre = (data) => {
  return (dispatch) => {
    return (
      axios
        // 1 -  modifie de la donnée en BDD
        .post("http://localhost:3000/listFiltre", data)
        // 2 - On dit au reducer la donnée recup tu va nous la mettre dans le store
        .then((res) => {
          dispatch({
            type: ADD_FILTRE, // Dans le reducer on va dire quand tu ressois tels données (switch) tu feras le comportement suivant
            payload: data, // transport : envois de donnée
          });
        })
        .catch((err) => console.log(err))
    );
  };
};