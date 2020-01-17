import React from "react";
import "./firstForm.styles.css";
import { useDispatch, useSelector } from "react-redux";
import { inputChangeHandler } from "../../redux/actions/formAction";
export default function FirstForm(props) {
  const dispatch = useDispatch();
  const { firstName, lastName, password, cPassword } = useSelector(
    state => state.formReducer
  );
  return (
    <>
      <input
        type="text"
        name="firstName"
        id="firstName"
        onChange={e => dispatch(inputChangeHandler(e))}
        value={firstName}
        placeholder="First Name"
        autoFocus
      />

      <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Last Name"
        onChange={e => dispatch(inputChangeHandler(e))}
        value={lastName}
      />

      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        onChange={e => dispatch(inputChangeHandler(e))}
        value={password}
      />

      <input
        type="password"
        name="cPassword"
        id="cPassword"
        placeholder="Confirm Password"
        onChange={e => dispatch(inputChangeHandler(e))}
        value={cPassword}
      />
    </>
  );
}
