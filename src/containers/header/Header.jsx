import React from "react";
import { useDispatch } from "react-redux";
import { toggleForm } from "../../redux/actions/formAction";

import "./header.styles.css";

function Header() {
  const dispatch = useDispatch();
  return (
    <div>
      <header>
        <button onClick={() => dispatch(toggleForm(0))}>1</button>
        <button onClick={() => dispatch(toggleForm(1))}>2</button>
        <button onClick={() => dispatch(toggleForm(2))}>3</button>
      </header>
    </div>
  );
}

export default Header;
