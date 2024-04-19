/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect } from "react";
import { TripsIndex } from "./TripsIndex";
import { TripsNew } from "./TripsNew";

export function Content() {
  const [trips, setTrips] = useState([]);

  const handleIndexTrips = () => {
    console.log("handleIndexTrips");
    axios.get("http://localhost:3000/trips.json").then((response) => {
      console.log(response.data);
      setTrips(response.data);
    });
  };

  const handleCreateTrips = (params, successCallback) => {
    console.log("handleCreateTrip", params);
    axios.post("http://localhost:3000/trips.json", params).then((response) => {
      setTrips([...trips, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexTrips, []);

  return (
    <div>
      <TripsNew onCreateTrips={handleCreateTrips} />
      <h1>Trippin</h1>
      <TripsIndex trips={trips} />
    </div>
  );
}
