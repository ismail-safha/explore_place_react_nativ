const BASE_URL = "https://maps.googleapis.com/maps/api/place";
const API_KEY = "AIzaSyA0iw7rdfNbjd8YOYBSBC4wTJAV-ZsT_FE";

const nearByPlace = (lat, lng, type) =>
  axios.get(
    BASE_URL +
      "/nearbysearch/json?" +
      "&location=" +
      lat +
      "," +
      lng +
      "&radius=1500&type=" +
      type +
      "&key=" +
      API_KEY
  );

export default {
  nearByPlace,
};
