import React from "react";
import "./secondForm.styles.css";
import { useDispatch, useSelector } from "react-redux";
import { inputChangeHandler } from "../../redux/actions/formAction";
export default function SecondForm(props) {
  const dispatch = useDispatch();
  const { gender, email, phone, country,errors } = useSelector(
    state => state.formReducer
  );
  return (
    <>
      <select
        name="gender"
        id="gender"
        onChange={e => dispatch(inputChangeHandler(e))}
        onBlur={e => dispatch(inputChangeHandler(e))}
        value={gender}
      >
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
       <span className="error">{errors.gender}</span>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        onChange={e => dispatch(inputChangeHandler(e))}
        onBlur={e => dispatch(inputChangeHandler(e))}
        value={email}
      />
       <span className="error">{errors.email}</span>
      <input
        type="text"
        name="phone"
        id="phone"
        placeholder="Phone"
        onChange={e => dispatch(inputChangeHandler(e))}
        onBlur={e => dispatch(inputChangeHandler(e))}
        value={phone}
      />
       <span className="error">{errors.phone}</span>
      <input
        type="text"
        name="country"
        id="country"
        placeholder="Country"
        onChange={e => dispatch(inputChangeHandler(e))}
        onBlur={e => dispatch(inputChangeHandler(e))}
        value={country}
      />
       <span className="error">{errors.country}</span>
    </>
  );
}
