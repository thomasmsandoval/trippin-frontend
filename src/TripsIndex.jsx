/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
export function TripsIndex(props) {
  return (
    <div id="trips-index">
      <h1>Planned Trips</h1>
      <div className="cards">
        {props.trips.map((trip, index) => (
          <div key={index} className="trips card">
            <div className="card-body">
              <h2>{trip.title}</h2>
              <img src={trip.image_url} />
              {/* <p>Places to visit: {trip.places}</p> */}
              <p>Start date: {trip.start_time}</p>
              <p>End date: {trip.end_time}</p>
              <button onClick={() => props.onShowTrip(trip)}>Trip Information</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
