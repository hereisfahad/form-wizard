import { dec, inc, inputChangeHandler } from "../utils";
const INITIAL_STATE = {
  forms: ["first", "second", "third"],
  index: 0,
  firstName: "",
  lastName: "",
  password: "",
  cPassword: "",
  email: "",
  gender: "",
  phone: "",
  country: "",
  lat: 31.4716993,
  lng: 74.2735069,
  errors: {
    gender: "Invalid Gender",
    email: "Invalid Email",
    phone: "Invalid Phone",
    country: "Invalid country"
  }
};

const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_FORM":
      return {
        ...state,
        index: action.payload
      };
    case "NEXT_FORM":
      return {
        ...state,
        index: inc(state.index)
      };
    case "PREV_FORM":
      return {
        ...state,
        index: dec(state.index)
      };
    case "INPUT_GOT_CHANGE":
      return {
        ...state,
        input: inputChangeHandler(state, action.payload)
      };
    case "MARKER_DRAGGED":
      return {
        ...state,
        lat: action.payload.lat,
        lng: action.payload.lng
      };
    case "FORM_SUBMITED":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default formReducer;
