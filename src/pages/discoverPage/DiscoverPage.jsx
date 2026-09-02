import { useState, useEffect } from "react";
import { fetchJoke } from "../../services/JokeApi";
import JokeCard from "../../components/jokeCard/JokeCard";
import "./DiscoverPage.css";

const categories = ["Any", "Programming", "Dark", "Pun", "Spooky", "Christmas"];

export default function DiscoverPage() {
  const [joke, setJoke] = useState("");
  const [previousJokes, setPreviousJokes] = useState([]);
  const [index, setIndex] = useState(0);
  const [jokeCategory, setJokeCategory] = useState("Any");

  async function handleFetchJoke(category) {
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
    handleFetchJoke(jokeCategory);
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
      <div className="discover-app-name">
        <h1>Smile</h1>
      </div>
      <div className="discover-page-inner-wrapper">
        <div className="joke-section">
          <JokeCard joke={joke} />
        </div>

        <div className="joke-controls">
          <div className="joke-navigation">
            <button
              className="previous-joke-button"
              onClick={() => {
                prevJoke();
              }}
            >
              Previous Joke
            </button>
            <button
              onClick={() => handleFetchJoke(jokeCategory)}
              className="generate-joke-button"
            >
              Get A New Joke
            </button>
          </div>
          <div className="category-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  jokeCategory === category
                    ? "category-button active"
                    : "category-button"
                }
                onClick={() => {
                  setJokeCategory(category);
                  handleFetchJoke(category);
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* </div> */}
    </main>
  );
}
