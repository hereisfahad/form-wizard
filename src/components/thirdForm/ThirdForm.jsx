import React from "react";
import Map from "./Map";

export default function ThirdForm(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <Map
          center={{ lat: 31.4716993, lng: 74.2735069 }}
          height="200px"
          width="500px"
          dragHandler={props.dragHandler}
          lat={props.lat}
          lng={props.lng}
        />
        <button type="submit" value="Submit">
          Save
        </button>
      </form>
    </div>
  );
}
