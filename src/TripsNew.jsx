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
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input name="title" type="text" id="title" required />
        </div>
        <div className="form-group">
          <label htmlFor="image_url">Image:</label>
          <input name="image_url" type="text" id="image_url" />
        </div>
        <div className="form-group">
          <label htmlFor="start_time">Start Date:</label>
          <input name="start_time" type="datetime-local" id="start_time" required />
        </div>
        <div className="form-group">
          <label htmlFor="end_time">End Date:</label>
          <input name="end_time" type="datetime-local" id="end_time" required />
        </div>
        <button type="submit">Create Trip</button>
      </form>
      <div className="photo-container">
        <img
          src="https://attractionsmagazine.com/wp-content/uploads/2019/06/Disney-Wonder-Tiana.png"
          alt="Trip Photo"
        />
      </div>
    </div>
  );
}
