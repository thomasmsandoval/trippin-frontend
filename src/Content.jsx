/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { TripsIndex } from "./TripsIndex";
import { TripsNew } from "./TripsNew";
import { TripsShow } from "./TripsShow";
import { PlacesIndex } from "./PlacesIndex";
import { PlacesNew } from "./PlacesNew";
import { PlacesShow } from "./PlacesShow";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Footer } from "./Footer";

export function Content() {
  const [trips, setTrips] = useState([]);
  const [isTripsShowVisible, setIsTripsShowVisible] = useState(false);
  const [currentTrip, setCurrentTrip] = useState({});
  const [places, setPlaces] = useState([]);
  const [isPlacesShowVisible, setIsPlacesShowVisible] = useState(false);
  const [currentPlace, setCurrentPlace] = useState({});

  useEffect(() => {
    handleIndexTrips();
    handleIndexPlaces();
  }, []);

  const handleIndexTrips = () => {
    console.log("handleIndexTrips");
    axios.get("http://localhost:3000/trips.json").then((response) => {
      console.log(response.data);
      setTrips(response.data);
    });
  };

  const handleCreateTrips = (params) => {
    console.log("handleCreateTrip", params);
    axios.post("http://localhost:3000/trips.json", params).then((response) => {
      setTrips([...trips, response.data]);
    });
  };

  const handleCreatePlaces = (params) => {
    console.log("handleCreatePlace", params);
    axios
      .post("http://localhost:3000/places.json", params)
      .then((response) => {
        setPlaces([...places, response.data]);
        handleClose();
      })
      .catch((error) => {
        console.error("Error creating place:", error);
      });
  };

  const handleShowTrip = (trip) => {
    setIsTripsShowVisible(true);
    setCurrentTrip(trip);
    axios.get(`http://localhost:3000/trips/${trip.id}/places.json`).then((response) => {
      setPlaces(response.data);
    });
  };

  const handleIndexPlaces = () => {
    console.log("handleIndexPlaces");
    axios.get("http://localhost:3000/places.json").then((response) => {
      console.log(response.data);
      setPlaces(response.data);
    });
  };

  const handleShowPlace = (place) => {
    console.log("handleShowPlace", place);
    setIsPlacesShowVisible(true);
    setCurrentPlace(place);
  };

  const handleUpdateTrip = (id, params, successCallback) => {
    console.log("handleUpdateTrip", params);
    axios
      .patch(`http://localhost:3000/trips/${id}.json`, params)
      .then((response) => {
        setTrips(
          trips.map((trip) => {
            if (trip.id === response.data.id) {
              return response.data;
            } else {
              return trip;
            }
          })
        );
        successCallback();
        handleClose();
      })
      .catch((error) => {
        console.error("Error updating trip:", error);
      });
  };

  const handleUpdatePlace = (id, params, successCallback) => {
    console.log("handleUpdatePlace", params);
    axios
      .patch(`http://localhost:3000/trips/${id}.json`, params)
      .then((response) => {
        setPlaces(
          places.map((place) => {
            if (place.id === response.data.id) {
              return response.data;
            } else {
              return place;
            }
          })
        );
        successCallback();
        handleClose();
      })
      .catch((error) => {
        console.error("Error updating place:", error);
      });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsTripsShowVisible(false);
  };

  const handleDestroyTrip = (trip) => {
    console.log("handleDestroyTrip", trip.id);
    axios.delete(`http://localhost:3000/trips/${trip.id}.json`).then((response) => {
      setTrips(trips.filter((t) => t.id !== trip.id));
      handleClose();
    });
  };

  const handleDestroyPlace = (place) => {
    console.log("handleDestroyPlace", place.id);
    axios.delete(`http://localhost:3000/places/${place.id}.json`).then((response) => {
      setPlaces(places.filter((p) => p.id !== place.id));
      handleClose();
    });
  };

  return (
    <main className="main">
      <div>
        <h1 className="content-heading">Trippin</h1>
        <Routes>
          <Route path="/" element={<TripsIndex trips={trips} onShowTrip={handleShowTrip} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/logout" element={<LogoutLink />} /> */}
          <Route path="/trips/new" element={<TripsNew onCreateTrips={handleCreateTrips} />} />
        </Routes>
        <Modal show={isTripsShowVisible} onClose={handleClose}>
          <TripsShow trip={currentTrip} onUpdateTrip={handleUpdateTrip} onDestroyTrip={handleDestroyTrip} />
          {isTripsShowVisible && <PlacesNew tripId={currentTrip.id} onCreatePlaces={handleCreatePlaces} />}
          <PlacesIndex places={places} onShowPlace={handleShowPlace} />
        </Modal>
        {/* <PlacesShow place={currentPlace} onUpdatePlace={handleUpdatePlace} onDestroyPlace={handleDestroyPlace} /> */}
        <Footer />
      </div>
    </main>
  );
}
