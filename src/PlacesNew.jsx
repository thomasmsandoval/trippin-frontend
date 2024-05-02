/* eslint-disable react/prop-types */
export function PlacesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("trip_id", props.tripId);
    props.onCreatePlaces(formData);
    event.target.reset();
  };

  return (
    <div>
      <h1>Must See Places</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input name="name" type="text" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input name="address" type="text" id="address" required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input name="description" type="text" id="description" required />
        </div>
        <div className="form-group">
          <label htmlFor="image_url">Image:</label>
          <input name="image_url" type="text" id="image_url" />
        </div>
        <div className="form-group">
          <label htmlFor="start_time">Start Time:</label>
          <input name="start_time" type="datetime-local" id="start_time" required />
        </div>
        <div className="form-group">
          <label htmlFor="end_time">End Time:</label>
          <input name="end_time" type="datetime-local" id="end_time" required />
        </div>
        <button type="submit">Create Place</button>
      </form>
    </div>
  );
}
