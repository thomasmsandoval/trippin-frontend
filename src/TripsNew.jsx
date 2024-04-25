/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export function TripsNew(props) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const params = Object.fromEntries(formData.entries());
    try {
      await props.onCreateTrips(params);
      event.target.reset();
    } catch (error) {
      console.error("Error creating trip:", error);
    }
  };

  return (
    <div>
      <h1>Plan a New Trip</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" required />
        </div>
        <div>
          Image: <input name="image_url" type="text" />
        </div>
        <div>
          Start Date: <input name="start_time" type="datetime-local" required />
        </div>
        <div>
          End Date: <input name="end_time" type="datetime-local" required />
        </div>
        <button type="submit">Create Trip</button>
      </form>
    </div>
  );
}
