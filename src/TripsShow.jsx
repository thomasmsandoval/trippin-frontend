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
      {/* <p>Image: {props.trip.image_url}</p> */}
      <p>Start Date: {props.trip.start_time}</p>
      <p>End Date: {props.trip.end_time}</p>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input defaultValue={props.trip.title} name="title" type="text" id="title" />
        </div>
        <div className="form-group">
          <label htmlFor="image_url">Image:</label>
          <input defaultValue={props.trip.image_url} name="image_url" type="url" id="image_url" />
        </div>
        <div className="form-group">
          <label htmlFor="start_time">Start Date:</label>
          <input defaultValue={props.trip.start_time} name="start_time" type="datetime-local" id="start_time" />
        </div>
        <div className="form-group">
          <label htmlFor="end_time">End Date:</label>
          <input defaultValue={props.trip.end_time} name="end_time" type="datetime-local" id="end_time" />
        </div>
        <button type="submit">Update Trip</button>
        <button onClick={handleClick}>Delete Trip</button>
      </form>
    </div>
  );
}
