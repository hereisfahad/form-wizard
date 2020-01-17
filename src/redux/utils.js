const dec = index => {
  if (index === 0) return index;
  else return --index;
};
const inc = index => {
  if (index === 2) return index;
  else return ++index;
};
const inputChangeHandler = (state, target) => {
  const { value, name } = target;
  state[name] = value;
};
// Todo: why redux-saga? why thunk? why batch
const submitForm = (state, e) => {
  e.preventDefault();

  console.log(state);
  fetch("http://localhost:3001/register", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      use: state
    })
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // alert(data);
    })
    .catch(err => {
      console.log(err);
      // alert("could'nt register use");
    });
};
export { dec, inc, inputChangeHandler, submitForm };
