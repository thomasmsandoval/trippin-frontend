/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export function TripsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const params = new FormData(event.target);
    props.onCreateTrips(params);
    event.target.reset();
  };

  return (
    <div>
      <h1>Plan a New Trip</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Image: <input name="image_url" type="text" />
        </div>
        <div>
          Start Date: <input name="start_time" type="datetime" />
        </div>
        <div>
          End Date: <input name="end_time" type="datetime" />
        </div>
        <button type="submit">Create Trip</button>
      </form>
    </div>
  );
}
