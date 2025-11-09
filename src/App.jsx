import { useState, useEffect } from "react";
import axios from "axios";
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

function App() {
  const [joke, setJoke] = useState("");
  const [previousJokes, setPreviousJokes] = useState([]);
  const [index, setIndex] = useState(0);

  async function fetchJoke(cat = "Any") {
    try {
      let response = await axios.get(
        `https://v2.jokeapi.dev/joke/${cat}?format=txt`
      );
      setJoke(response.data);
      let newJokes = previousJokes;
      newJokes.push(response.data);
      setPreviousJokes(newJokes);
      console.log(previousJokes);
      setIndex(previousJokes.length - 1);
    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke("😅 Oops! Failed to fetch a joke. Try again!");
    }
  }
  useEffect(() => {
    fetchJoke();
  }, []);

  function prevJoke() {
    if ((previousJokes.length > 0) & (index >= 1)) {
      setJoke(previousJokes[index - 1]);
      setIndex(index - 1);
    } else {
      if (previousJokes.length === 0) {
        setJoke("you haven't generate any joke");
      } else {
        setJoke(
          <p className="text-amber-300">
            You have seen all the jokes you generated, generate a new joke!
          </p>
        );
      }
    }
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-linear-to-r from-blue-400 to-cyan-200 p-2">
        <h1 className="text-6xl text-white ">Smile Infinitely</h1>
        <p className="text-2xl text-blue-800">Presented by Ermais with Sv443</p>
      </div>
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

        <div className="text-white font-bold text-2xl text-center flex justify-center">
          <div className="w-2/3">{joke}</div>
        </div>
      </div>
      <div className="bg-linear-to-r from-blue-400 to-blue-300 p-5 text-white flex flex-col items-center">
        <p>ermias haimanot</p>
        <div className="flex gap-2">
          <a href="https://github.com/Ermi-haimi" target="_blank">
            <FaGithub className="text-black text-xl" />
          </a>
          <a href="https://www.linkedin.com/in/ermiashtsegaye/" target="_blank">
            <FaLinkedin className="text-blue-600 text-xl" />
          </a>
          <a href="https://t.me/ermiasHT" target="_blank">
            <FaTelegramPlane className="text-white text-xl" />
          </a>
        </div>
        <p className="text-center text-gray-500">
          The developer does not endorse or take responsibility for any of the
          content displayed.
        </p>
      </div>
    </div>
  );
}

export default App;
