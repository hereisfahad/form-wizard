import React from "react";
import "./firstForm.styles.css";
export default function FirstForm(props) {
  return (
    <div className="pDiv">
      <label htmlFor="firstName">First Name </label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        onChange={props.inputChangeHandler}
        value={props.fields.firstName}
      />
      <br />
      <label htmlFor="lastName">Last Name </label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        onChange={props.inputChangeHandler}
        value={props.fields.lastName}
      />
      <br />
      <label htmlFor="password">Password </label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={props.inputChangeHandler}
        value={props.fields.password}
      />
      <br />
      <label htmlFor="cPassword">Confirm Password </label>
      <input
        type="password"
        name="cPassword"
        id="cPassword"
        onChange={props.inputChangeHandler}
        value={props.fields.cPassword}
      />
    </div>
  );
}
