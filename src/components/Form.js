const Form = ({lat, handleSubmit, setLon, setLat, lon}) => {
  return (
    <div>
      <span className="title">Weather App</span>

      <br />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="lat"
          placeholder="Latitude"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
        />
        &nbsp; &nbsp;&nbsp;
        <input
          type="text"
          name="log"
          placeholder="Longitude"
          value={lon}
          onChange={(e) => setLon(e.target.value)}
        />
        <button className="getweather" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
