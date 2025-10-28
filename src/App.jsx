import { useState, useEffect } from "react";
import axios from "axios";
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

function App() {
  const [joke, setJoke] = useState("");

  async function fetchJoke(
    // apiLink = "https://v2.jokeapi.dev/joke/Any?format=txt"
    cat = "Any"
  ) {
    try {
      let response = await axios.get(
        `https://v2.jokeapi.dev/joke/${cat}?format=txt`
      );
      setJoke(response.data);
    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke("😅 Oops! Failed to fetch a joke. Try again!");
    }
  }
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-linear-to-r from-blue-400 to-cyan-200 p-2">
        <h1 className="text-6xl text-white ">Smile Infinitely</h1>
        <p className="text-2xl text-blue-800">Presented by Ermais with Sv443</p>
      </div>
      <div className="bg-blue-400 flex-3 flex flex-col">
        <div className="flex justify-center m-4 flex-col items-center">
          <button
            onClick={() => fetchJoke()}
            className="bg-amber-300 p-2 w-fit text-blue-950 rounded-xl shadow-xl/30 active:shadow-2xl/30 hover:opacity-90 cursor-pointer "
          >
            Generate a joke
          </button>
          <div className="flex flex-col items-center">
            <p className="font-bold p-3">A joke by category</p>

            <div className="flex flex-wrap justify-center gap-2 *:bg-blue-300 *:text-blue-950 *:rounded-xl *:shadow-xl/30 *:active:shadow-2xl/30 *:hover:opacity-90 *:cursor-pointer">
              <button
                onClick={() => {
                  fetchJoke("Programming");
                }}
                className="bg-amber-300 p-2 w-fit "
              >
                Programming
              </button>
              <button
                onClick={() => {
                  fetchJoke("Dark");
                }}
                className="bg-amber-300 p-2 w-fit "
              >
                Dark
              </button>
              <button
                onClick={() => {
                  fetchJoke("Pun");
                }}
                className="bg-amber-300 p-2 w-fit "
              >
                Pun
              </button>
              <button
                onClick={() => {
                  fetchJoke("Spooky");
                }}
                className="bg-amber-300 p-2 w-fit "
              >
                Spooky
              </button>
              <button
                onClick={() => {
                  fetchJoke("Christmas");
                }}
                className="bg-amber-300 p-2 w-fit "
              >
                Christmas
              </button>
            </div>
          </div>
        </div>

        <div className="text-white font-bold text-2xl text-center flex justify-center">
          <p className="w-2/3">{joke}</p>
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
      </div>
    </div>
  );
}

export default App;
