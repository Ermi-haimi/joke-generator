import { useState, useEffect } from "react";
import { fetchJoke } from "../../services/JokeApi";
import JokeCard from "../../components/jokeCard/JokeCard";
import "./DiscoverPage.css";

const categories = ["Programming", "Dark", "Pun", "Spooky", "Christmas"];

export default function DiscoverPage() {
  const [joke, setJoke] = useState("");
  const [previousJokes, setPreviousJokes] = useState([]);
  const [index, setIndex] = useState(0);

  async function handleFetchJoke(category = "Any") {
    try {
      const newJoke = await fetchJoke(category);

      setJoke(newJoke);

      const newJokes = [...previousJokes, newJoke];

      setPreviousJokes(newJokes);
      setIndex(newJokes.length - 1);
    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke("Oops! Failed to fetch a joke. Try again!");
    }
  }

  useEffect(() => {
    handleFetchJoke();
  }, []);

  function prevJoke() {
    if (previousJokes.length > 0 && index >= 1) {
      setJoke(previousJokes[index - 1]);
      setIndex(index - 1);
    } else {
      if (previousJokes.length === 0) {
        setJoke("you haven't generate any joke");
      } else {
        setJoke(
          "You have seen all the jokes you generated, generate a new joke!",
        );
      }
    }
  }

  return (
    <main className="discover-page-wrapper">
      <div className="discover-page-inner-wrapper">
        <div className="">
          <div className="">
            <button
              className=""
              onClick={() => {
                prevJoke();
              }}
            >
              Previous Joke
            </button>
            <button onClick={() => handleFetchJoke()} className="">
              Generate a new joke
            </button>
          </div>
          <div className="categories">
            <p>A joke by category</p>

            {categories.map((category) => (
              <button key={category} onClick={() => handleFetchJoke(category)}>
                {category}
              </button>
            ))}
          </div>
        </div>
        <JokeCard joke={joke} />
      </div>
    </main>
  );
}
