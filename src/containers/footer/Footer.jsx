import React from "react";
import { useDispatch } from "react-redux";
import { nextForm, prevForm } from "../../redux/actions/formAction";
import { formSubmitHandler } from "../../redux/actions/formAction";

import "./footer.styles.css";

function Footer() {
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
          >
            Save
          </button>
        </form>
      </footer>
    </div>
  );
}

export default Footer;
