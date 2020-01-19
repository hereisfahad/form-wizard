import React from "react";
import "./firstForm.styles.css";
import { useDispatch, useSelector } from "react-redux";
import { inputChangeHandler } from "../../redux/actions/formAction";
export default function FirstForm(props) {
  const dispatch = useDispatch();
  const { firstName, lastName, password, cPassword, errors } = useSelector(
    state => state.formReducer
  );
  return (
    <>
      <input
        type="text"
        name="firstName"
        id="firstName"
        onChange={e => dispatch(inputChangeHandler(e))}
        onBlur={(e) => dispatch(inputChangeHandler(e))}
        value={firstName}
        placeholder="First Name"
        autoFocus
      />
      <span className="error">{errors.firstName}</span>


      <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Last Name"
        onChange={e => dispatch(inputChangeHandler(e))}
        onBlur={(e) => dispatch(inputChangeHandler(e))}
        value={lastName}
      />
      <span className="error">{errors.lastName}</span>

      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        onChange={e => dispatch(inputChangeHandler(e))}
        onBlur={(e) => dispatch(inputChangeHandler(e))}
        value={password}
      />
      

      <input
        type="password"
        name="cPassword"
        id="cPassword"
        placeholder="Confirm Password"
        onChange={e => dispatch(inputChangeHandler(e))}
        onBlur={(e) => dispatch(inputChangeHandler(e))}
        value={cPassword}
      />
      <span className="error">{errors.password && errors.cPassword}</span>
    </>
  );
}
