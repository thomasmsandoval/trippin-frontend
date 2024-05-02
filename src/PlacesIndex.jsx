/* eslint-disable react/prop-types */
export function PlacesIndex(props) {
  return (
    <div>
      <h1>Places to Visit</h1>
      {props.places.map((place, index) => (
        <div key={index}>
          <h2>{place.name}</h2>
          <img src={place.image_url} />
          <p>Address: {place.address}</p>
          <p>Description: {place.description}</p>
          <p>Start date: {place.start_time}</p>
          <p>End date: {place.end_time}</p>
          {/* <button onClick={() => props.onShowPlace(place)}>Place Information</button> */}
        </div>
      ))}
    </div>
  );
}
