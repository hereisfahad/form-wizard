import React,{useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { dragHandler } from "../../redux/actions/formAction";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker
} from "react-google-maps";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyA2n7hH6W6cHvZdRX2kBmL0b21ev6WWjag");
Geocode.enableDebug();

export default function Map(props) {
  const dispatch = useDispatch();
  // const { lat, lng } = useSelector(state => state.formReducer);
  useEffect(()=>{
    setLocalLat(localLAT=props.lat)
    setLocalLng(localLNG=props.lng)
  },[])
  let [localLAT,setLocalLat] = useState('31.4716993');
  let [localLNG,setLocalLng] = useState('74.2735069');

  const onMarkerDragEnd = e => {
    let lat = e.latLng.lat();
    let lng = e.latLng.lng();
    let coords = { lat, lng };
    dispatch(dragHandler(coords));
  };

  const AsyncMap = withScriptjs(
    withGoogleMap(props => (
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{
          lat:props.lat,
          lng:props.lng
        }}
      >
        <Marker
          draggable={true}
          onDragEnd={onMarkerDragEnd}
          position={{
            lat: props.lat || 31.4716993,
            lng: props.lng || 74.2735069
          }}
        />
        <Marker />
      </GoogleMap>
    ))
  );
  return (
    <AsyncMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA2n7hH6W6cHvZdRX2kBmL0b21ev6WWjag&libraries=places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: "200px", width: "290px" }} />}
      mapElement={<div style={{ height: `100%` }} />}
      lat={localLAT} 
      lng={localLNG}
    />
  );
}
