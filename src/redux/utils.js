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
 name = name === "cPassword" ? "password" : name;
  state.errors[name] = validateField(state, { name, value })
};
const validEmailRegex = RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

const validateField = (state, target) => {
  const { value, name } = target;
  console.log(value, name)
  switch (name) {
    case "firstName":
      return value.length > 0 ? "" : "Invalid First Name"
    case "lastName":
      return value.length > 0 ? "" : "Invalid Last Name"
    case "password":
      console.log('password changing')
      return state.password === state.cPassword ? "" : "Password Does'nt Match";
    case "gender":
      return value !== "" ? "" : "Invalid Gender";
    case "email":
      return validEmailRegex.test(value) ? "" : "Invalid Email";
    case "phone":
      return (value !== "" && value.length > 10) ? "" : "Invalid Phone";
    case "country":
      return value !== "" ? "" : "Invalid Country";
    default:
      return state;
  }

}
// Todo: why redux-saga? why thunk? why batch
const submitForm = (state, e) => {
  e.preventDefault();

  console.log(state);
  fetch("https://apiformwizard.herokuapp.com/register", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      use: state
    })
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      alert(data);
    })
    .catch(err => {
      console.log(err);
      alert("could'nt register use");
    });
};
export { dec, inc, inputChangeHandler, submitForm };
