/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect } from "react";
import { TripsIndex } from "./TripsIndex";
import { TripsNew } from "./TripsNew";
import { TripsShow } from "./TripsShow";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Content() {
  const [trips, setTrips] = useState([]);
  const [isTripsShowVisible, setIsTripsShowVisible] = useState(false);
  const [currentTrip, setCurrentTrip] = useState({});

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

  const handleShowTrip = (trip) => {
    console.log("handleShowTrip", trip);
    setIsTripsShowVisible(true);
    setCurrentTrip(trip);
  };

  const handleUpdateTrip = (id, params, successCallback) => {
    console.log("handleUpdateTrip", params);
    axios.patch(`http://localhost:3000/trips/${id}.json`, params).then((response) => {
      setTrips(
        trips.map((tip) => {
          if (trips.id === response.data.id) {
            return response.data;
          } else {
            return trips;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsTripsShowVisible(false);
  };

  const handleDestroyTrip = (id) => {
    console.log("handleDestroyTrip", id);
    axios.delete(`http://localhost:3000/trips/${id}.json`).then((response) => {
      setTrips(trips.filter((trip) => trip.id !== id));
      handleClose();
    });
  };

  useEffect(handleIndexTrips, []);

  return (
    <div>
      <Login />
      <LogoutLink />
      <Signup />
      <h1>Trippin</h1>
      <TripsNew onCreateTrips={handleCreateTrips} />
      <TripsIndex trips={trips} onShowTrip={handleShowTrip} />
      <Modal show={isTripsShowVisible} onClose={handleClose}>
        <TripsShow trip={currentTrip} onUpdateTrip={handleUpdateTrip} onDestroyTrip={handleDestroyTrip} />
      </Modal>
    </div>
  );
}
