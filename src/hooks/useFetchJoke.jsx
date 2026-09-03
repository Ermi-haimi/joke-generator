import { useState, useEffect } from "react";
import { fetchJoke } from "../services/JokeApi";

export default function useFetchJoke() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    async function getFetchJoke() {
      try {
        const newJoke = await fetchJoke("Any");
        setJoke(newJoke);
      } catch (error) {
        console.error("Error fetching joke:", error);
        setJoke("Oops! Failed to fetch a joke. Try again!");
      }
    }

    getFetchJoke();
  }, []);

  return joke;
}
