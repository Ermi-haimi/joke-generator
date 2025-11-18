import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { favouriteContext } from "./FavContext";
import { Link } from "react-router";
import ShareButtons from "./ShareButtons";

function MainPage() {
  const [joke, setJoke] = useState("");
  const [previousJokes, setPreviousJokes] = useState([]);
  const [index, setIndex] = useState(0);
  const { favourites, addFavourite } = useContext(favouriteContext);

  async function fetchJoke(cat = "Any") {
    try {
      let response = await axios.get(
        `https://v2.jokeapi.dev/joke/${cat}?format=txt`
      );
      setJoke(response.data);
      let newJokes = previousJokes;
      newJokes.push(response.data);
      setPreviousJokes(newJokes);
      setIndex(previousJokes.length - 1);
    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke("Oops! Failed to fetch a joke. Try again!");
    }
  }
  useEffect(() => {
    fetchJoke();
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favourites));
  }, [favourites]);

  function prevJoke() {
    if ((previousJokes.length > 0) & (index >= 1)) {
      setJoke(previousJokes[index - 1]);
      setIndex(index - 1);
    } else {
      if (previousJokes.length === 0) {
        setJoke("you haven't generate any joke");
      } else {
        setJoke(
          "You have seen all the jokes you generated, generate a new joke!"
        );
      }
    }
  }

  return (
    <div className="flex flex-col flex-1">
      <div className="bg-blue-400 flex-3 flex flex-col">
        <div className="flex justify-center m-4 flex-col items-center">
          <div className="flex  gap-1 *:text-blue-950 *:rounded-xl *:p-2 *:shadow-xl/30 *:active:shadow-2xl/30 *:hover:opacity-90 *:cursor-pointer">
            <button
              className="bg-amber-200  "
              onClick={() => {
                prevJoke();
              }}
            >
              Previous Joke
            </button>
            <button onClick={() => fetchJoke()} className="bg-amber-300 ">
              Generate a new joke
            </button>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold p-3">A joke by category</p>

            <div className="flex flex-wrap justify-center gap-2 *:bg-blue-300 *:text-blue-950 *:rounded-xl *:shadow-xl/30 *:active:shadow-2xl/30 *:hover:opacity-90 *:cursor-pointer">
              <button
                onClick={() => {
                  fetchJoke("Programming");
                }}
                className=" p-2 w-fit "
              >
                Programming
              </button>
              <button
                onClick={() => {
                  fetchJoke("Dark");
                }}
                className=" p-2 w-fit "
              >
                Dark
              </button>
              <button
                onClick={() => {
                  fetchJoke("Pun");
                }}
                className=" p-2 w-fit "
              >
                Pun
              </button>
              <button
                onClick={() => {
                  fetchJoke("Spooky");
                }}
                className=" p-2 w-fit "
              >
                Spooky
              </button>
              <button
                onClick={() => {
                  fetchJoke("Christmas");
                }}
                className=" p-2 w-fit "
              >
                Christmas
              </button>
            </div>
          </div>
        </div>
        <div className="text-white font-bold text-2xl text-center flex justify-center flex-col items-center gap-3">
          <div
            className={
              joke.includes("have seen all the")
                ? "text-amber-300"
                : "w-2/3 flex justify-center items-center "
            }
          >
            {joke}
            {joke !== "Oops! Failed to fetch a joke. Try again!" &&
              joke !== "" &&
              joke !== "you haven't generate any joke" &&
              joke !==
                "You have seen all the jokes you generated, generate a new joke!" && (
                <button className=" p-2 m-1" onClick={() => addFavourite(joke)}>
                  {favourites.includes(joke) ? (
                    <FaTimesCircle className="text-red-600" />
                  ) : (
                    <FaCheckCircle className="" />
                  )}
                </button>
              )}
          </div>
          <div className="text-blue-700">
            {joke !== "Oops! Failed to fetch a joke. Try again!" &&
              joke !== "" &&
              joke !== "you haven't generate any joke" &&
              !joke.includes("have seen all the") && (
                <ShareButtons joke={joke} />
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
