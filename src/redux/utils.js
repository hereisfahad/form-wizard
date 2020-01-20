const dec = index => {
  if (index === 0) return index;
  else return --index;
};
const inc = index => {
  if (index === 2) return index;
  else return ++index;
};
const inputChangeHandler = (state, target) => {
  let { value, name } = target;
  state[name] = value;
 name = name === "cPassword" ? "password" : name;
  state.errors[name] = validateField(state, { name, value })
};
const validEmailRegex = RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

const validateField = (state, target) => {
  const { value, name } = target;
  switch (name) {
    case "firstName":
      return value.length > 0 ? "" : "Invalid First Name"
    case "lastName":
      return value.length > 0 ? "" : "Invalid Last Name"
    case "password":
      return (state.password === state.cPassword ? "" : "Password Doesn't Match") ||
       (state.password.length > 0 ? "" : "Password Can't Be Blank")
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

export { dec, inc, inputChangeHandler };
