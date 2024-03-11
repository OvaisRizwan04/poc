import axios from "axios";

const API_KEY = "57ab08c8f1b9be5b7ff0b63c34afaf6e";
const API_URL = "http://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (city, country) => {
  try {
    let response = await axios.get(
      `${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.log("error", error.message);
    return error.response;
  }
};
