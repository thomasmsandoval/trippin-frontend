/* eslint-disable react/prop-types */
export function TripsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateTrip(props.trip.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyTrip(props.trip);
  };

  return (
    <div>
      <h1>Trip information</h1>
      <p>Title: {props.trip.title}</p>
      <p>Image: {props.trip.image_url}</p>
      <p>Start Date: {props.trip.start_time}</p>
      <p>End Date: {props.trip.end_time}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={props.trip.title} name="title" type="text" />
        </div>
        <div>
          Image: <input defaultValue={props.trip.image_url} name="image_url" type="url" />
        </div>
        <div>
          Start Date: <input defaultValue={props.trip.start_time} name="start_time" type="datetime-local" />
        </div>
        <div>
          End Date: <input defaultValue={props.trip.end_time} name="end_time" type="datetime-local" />
        </div>
        <button type="submit">Update Trip</button>
      </form>
      <button onClick={handleClick}>Delete Trip</button>
    </div>
  );
}
