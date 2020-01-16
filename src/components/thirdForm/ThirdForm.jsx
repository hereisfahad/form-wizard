import React from "react";
import Map from "./Map";

export default function ThirdForm(props) {
  return (
    <form onSubmit={props.handleSubmit} style={{ position: "relative" }}>
      <Map
        center={{ lat: 31.4716993, lng: 74.2735069 }}
        height="200px"
        width="312px"
        dragHandler={props.dragHandler}
        lat={props.lat}
        lng={props.lng}
      />
      {/* <button
        type="submit"
        value="Submit"
        style={{
          position: "absolute",
          bottom: "195px",
          right: "395px",
          padding: "10px 15px"
        }}
      >
        Save
      </button> */}
    </form>
  );
}
