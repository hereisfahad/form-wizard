import React,{useMemo} from "react";
import Map from "../../containers/map/Map";
import { useSelector } from "react-redux";


export default function ThirdForm() {
  const { lat, lng } = useSelector(state => state.formReducer);
  // stoping map to rerender if marker is dragged
  return useMemo(() => <Map lat={lat} lng={lng}/>,[]);
}
