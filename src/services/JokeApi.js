import axios from "axios";

const API_URL = "https://v2.jokeapi.dev/joke";

export async function fetchJoke(cat = "Any") {
  let response = await axios.get(`${API_URL}/${cat}?format=txt`);
  return response.data;
}
