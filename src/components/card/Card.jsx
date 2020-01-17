import React from "react";

import Header from "../../containers/header/Header";
import Footer from "../../containers/footer/Footer";

import FirstForm from "../../containers/firstForm/FirstForm";
import SecondForm from "../../containers/secondForm/SecondForm";
import ThirdForm from "../thirdForm/ThirdForm";

import { useSelector } from "react-redux";

import "./card.styles.css";

function Card() {
  const index = useSelector(state => state.formReducer.index);
  return (
    <div className="card">
      <Header />
      <div id="centerForm">
        {index === 0 ? (
          <FirstForm />
        ) : index === 1 ? (
          <SecondForm />
        ) : index === 2 ? (
          <ThirdForm />
        ) : (
          ""
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Card;
