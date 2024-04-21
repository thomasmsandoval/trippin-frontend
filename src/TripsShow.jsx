/* eslint-disable react/prop-types */
export function TripsShow(props) {
  return (
    <div>
      <h1>Trip information</h1>
      <p>Title: {props.trip.title}</p>
      <p>Image: {props.trip.image_url}</p>
      <p>Start Date: {props.trip.start_time}</p>
      <p>End Date: {props.trip.end_time}</p>
      <form>
        <div>
          Title: <input defaultValue={props.trip.title} name="title" type="text" />
        </div>
        <div>
          Image: <input defaultValue={props.trip.image_url} name="image" type="text" />
        </div>
        <div>
          Start Date: <input defaultValue={props.trip.start_time} name="start date" type="datetime" />
        </div>
        <div>
          End Date: <input defaultValue={props.trip.end_time} name="end date" type="datetime" />
        </div>
      </form>
    </div>
  );
}
