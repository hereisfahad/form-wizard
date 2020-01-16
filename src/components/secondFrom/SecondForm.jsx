import React from "react";
import "./secondForm.styles.css";
export default function SecondForm(props) {
  return (
    <div className="secondForm">
      <select
        name="gender"
        id="gender"
        onChange={props.inputChangeHandler}
        value={props.fields.gender}
      >
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <br />

      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        onChange={props.inputChangeHandler}
        value={props.fields.email}
      />
      <br />
      {/* <label htmlFor="phone">Phone</label> */}
      <input
        type="text"
        name="phone"
        id="phone"
        placeholder="Phone"
        onChange={props.inputChangeHandler}
        value={props.fields.phone}
      />
      <br />
      {/* <label htmlFor="country">Country</label> */}
      <input
        type="text"
        name="country"
        id="country"
        placeholder="Country"
        onChange={props.inputChangeHandler}
        value={props.fields.country}
      />
    </div>
  );
}

/* <div className="gender">
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
      </div> */
