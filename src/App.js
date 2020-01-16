import React from "react";
import "./App.css";

import FirstForm from "./components/firstForm/FirstForm";
import SecondForm from "./components/secondFrom/SecondForm";
import ThirdForm from "./components/thirdForm/ThirdForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forms: ["first", "second", "third"],
      index: 1,
      firstName: "",
      lastName: "",
      password: "",
      cPassword: "",
      email: "",
      gender: "",
      phone: "",
      country: "",
      lat: "",
      lng: ""
    };
  }
  inputChangeHandler = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };
  dragHandler = (lat, lng) => {
    this.setState({
      lat,
      lng
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    //api call here
  };
  toggleForm = index => {
    this.setState({ index });
  };
  prev = () => {
    this.setState((prevState, props) => ({
      index: prevState.index !== 0 ? prevState.index - 1 : 0
    }));
  };
  next = () => {
    this.setState(prevState => ({
      index: prevState.index !== 2 ? prevState.index + 1 : 2
    }));
  };
  render() {
    return (
      <div className="App">
        <div className="card"></div>
        <header>
          <button onClick={() => this.toggleForm(0)}>1</button>
          <button onClick={() => this.toggleForm(1)}>2</button>
          <button onClick={() => this.toggleForm(2)}>3</button>
        </header>
        <div id="centerForm">
          {this.state.forms[this.state.index] === "first" ? (
            <FirstForm
              fields={this.state}
              inputChangeHandler={this.inputChangeHandler}
            />
          ) : this.state.forms[this.state.index] === "second" ? (
            <SecondForm
              fields={this.state}
              inputChangeHandler={this.inputChangeHandler}
            />
          ) : this.state.forms[this.state.index] === "third" ? (
            <ThirdForm
              fields={this.state}
              dragHandler={this.dragHandler}
              lat={this.state.lat}
              lng={this.state.lng}
              handleSubmit={this.handleSubmit}
            />
          ) : (
            ""
          )}
        </div>
        <footer>
          <button onClick={() => this.prev("back")}>Back</button>
          <button onClick={() => this.next("next")}>Next</button>
        </footer>
      </div>
    );
  }
}

export default App;
