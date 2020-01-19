import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextForm, prevForm } from "../../redux/actions/formAction";
import { formSubmitHandler } from "../../redux/actions/formAction";

import "./footer.styles.css";

function Footer() {
  const state = useSelector(state => state.formReducer)
  const disableState = (errors) => {
    console.log(errors)
    const values = Object.values(errors)
    return values.some(value => value.length !== 0)
  }
  const dispatch = useDispatch();
  return (
    <div>
      <footer>
        <button onClick={() => dispatch(prevForm())}>Back</button>
        <button onClick={() => dispatch(nextForm())}>Next</button>
        <form
          onSubmit={e => dispatch(formSubmitHandler(e))}
          style={{
            maxWidth: "38vw"
          }}
        >
          <button
            type="submit"
            value="Submit"
            style={{
              padding: "10px 15px"
            }}
            disabled={disableState(state.errors)}
          >
            Save
          </button>
        </form>
      </footer>
    </div>
  );
}

export default Footer;
