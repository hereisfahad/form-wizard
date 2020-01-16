import React from "react";

export default function SecondForm(props) {
  return (
    <div>
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        name="gender"
        value="male"
        id="male"
        checked={"male" === props.fields.gender}
        onChange={props.inputChangeHandler}
      />
      <label htmlFor="firstName">Female</label>
      <input
        type="radio"
        name="gender"
        value="female"
        id="female"
        checked={"female" === props.fields.gender}
        onChange={props.inputChangeHandler}
      />
      <label htmlFor="other">Other</label>
      <input
        type="radio"
        name="gender"
        value="other"
        id="other"
        checked={"other" === props.fields.gender}
        onChange={props.inputChangeHandler}
      />
      <br />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={props.inputChangeHandler}
        value={props.fields.email}
      />
      <br />
      <label htmlFor="phone">Phone</label>
      <input
        type="text"
        name="phone"
        id="phone"
        onChange={props.inputChangeHandler}
        value={props.fields.phone}
      />
      <br />
      <label htmlFor="country">Country</label>
      <input
        type="text"
        name="country"
        id="country"
        onChange={props.inputChangeHandler}
        value={props.fields.country}
      />
    </div>
  );
}
