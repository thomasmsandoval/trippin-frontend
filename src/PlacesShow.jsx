/* eslint-disable react/prop-types */
export function PlacesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePlace(props.place.id, params, () => event.target.reset());
  };

  // const handleClick = () => {
  //   props.onDestroyPlace(props.place);
  // };

  return (
    <div>
      <h1>Places to See</h1>
      <p>Name: {props.place.name}</p>
      <p>Address: {props.place.address}</p>
      <p>Description: {props.place.description}</p>
      <p>Image: {props.place.image_url}</p>
      <p>Start Time: {props.place.start_time}</p>
      <p>End Time: {props.place.end_time}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.place.name} name="name" type="text" />
        </div>
        <div>
          Address: <input defaultValue={props.place.address} name="address" type="text" />
        </div>
        <div>
          Description: <input defaultValue={props.place.description} name="description" type="text" />
        </div>
        <div>
          Image: <input defaultValue={props.place.image_url} name="image_url" type="text" />
        </div>
        <div>
          Start Time: <input defaultValue={props.place.start_time} name="start_time" type="datetime" />
        </div>
        <div>
          End Time: <input defaultValue={props.place.end_time} name="end_time" type="datetime" />
        </div>
        <button type="submit">Update Places</button>
      </form>
      {/* <button onClick={handleClick}>Delete Place</button> */}
    </div>
  );
}
