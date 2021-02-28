import {useState} from 'react';
import DisplayWeather from './DisplayWeather';
import Form from './Form';
import {API_KEY, API_BASE_URL} from '../config';
import './weather.css';

const Weather = () => {
  // declaring variables
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [weather, setWeather] = useState({});
  // getting the name of the city from the coordinates
  const getNameFromCoordinates = async () => {
    try {
      const data = await fetch(
        ` ${API_BASE_URL}geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}&units=metric`
      );
      const res = await data.json();
      getCityByName(res[0].name);
    } catch (e) {
      alert('Please input correct coordinates');
    }
  };
  // getting the name of the city from the coordinates
  const getCityByName = async (name) => {
    const data = await fetch(
      `${API_BASE_URL}/data/2.5/forecast?q=${name}&cnt=5&appid=${API_KEY}`
    );
    const weatherResponse = await data.json();
    setWeather(weatherResponse);
  };

  // handling form submission fxn
  const handleSubmit = (e) => {
    e.preventDefault();
    getNameFromCoordinates();
    setLat('');
    setLon('');
  };

  return (
    <div className="weather">
      <Form
        handleSubmit={handleSubmit}
        lat={lat}
        lon={lon}
        setLat={setLat}
        setLon={setLon}
      />
      <h1>City: {weather.city && weather.city.name}</h1>
      {weather.list &&
        weather.list.map((day, i) => (
          <DisplayWeather
            key={i}
            day={i}
            temp={day.main.temp}
            weatherDescription={day.weather[0].description}
          />
        ))}
    </div>
  );
};

export default Weather;
