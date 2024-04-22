/* eslint-disable react/prop-types */
export function PlacesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const params = new FormData(event.target);
    props.onCreatePlaces(params);
    event.target.reset();
  };

  return (
    <div>
      <h1>Must See Places</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Adress: <input name="adress" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          Image: <input name="image_url" type="text" />
        </div>
        <div>
          Start Time: <input name="start_time" type="datetime" />
        </div>
        <div>
          End Time: <input name="end_time" type="datetime" />
        </div>
        <button type="submit">Create Place</button>
      </form>
    </div>
  );
}
