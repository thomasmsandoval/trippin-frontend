/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
export function TripsIndex(props) {
  return (
    <div>
      <h1>All trips</h1>
      {props.trips.map((trip, index) => (
        <div key={index}>
          <h2>{trip.title}</h2>
          <img src={trip.image_url} />
          {/* <p>Places to visit: {trip.places}</p> */}
          <p>Start date: {trip.start_time}</p>
          <p>End date: {trip.end_time}</p>
          <button onClick={() => props.onShowTrip(trip)}>Places to See</button>
        </div>
      ))}
    </div>
  );
}
