export const toggleForm = index => ({
  type: "TOGGLE_FORM",
  payload: index
});
export const nextForm = () => ({
  type: "NEXT_FORM"
});
export const prevForm = () => ({
  type: "PREV_FORM"
});
export const inputChangeHandler = e => {
  return {
    type: "INPUT_GOT_CHANGE",
    payload: e.target
  };
};
export const dragHandler = coords => {
  return {
    type: "MARKER_DRAGGED",
    payload: coords
  };
};

export const formSubmitHandler = e => {
  return {
    type: "FORM_SUBMITED",
    payload: e
  };
};
