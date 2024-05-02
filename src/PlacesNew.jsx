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
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" required />
        </div>
        <div>
          Address: <input name="address" type="text" required />
        </div>
        <div>
          Description: <input name="description" type="text" required />
        </div>
        <div>
          Image: <input name="image_url" type="text" />
        </div>
        <div>
          Start Time: <input name="start_time" type="datetime-local" required />
        </div>
        <div>
          End Time: <input name="end_time" type="datetime-local" required />
        </div>
        <button type="submit">Create Place</button>
      </form>
    </div>
  );
}
