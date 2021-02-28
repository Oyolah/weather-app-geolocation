const DisplayWeather = ({day, weatherDescription, temp}) => {
  // labelling the days for the weather forecast
  const dayFormatter = (day) => {
    let correctDay;
    if (day === 0) {
      correctDay = 'Today';
    } else if (day === 1) {
      correctDay = 'Tomorrow';
    } else {
      correctDay = day + 1;
    }
    return correctDay;
  };
  return (
    <div>
      <hr />
      <div>
        <span>Day: {dayFormatter(day)}</span>
        <h4>{weatherDescription}</h4>
        <p>Temp: {`${Math.floor(temp - 273.15)}° C`}</p>
      </div>
    </div>
  );
};

export default DisplayWeather;
