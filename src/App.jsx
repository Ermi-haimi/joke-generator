import { useState, Fragment } from "react";
import axios from "axios";

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

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-blue-400 p-2">
        <h1 className="text-6xl text-white ">Laugh Infinnitely</h1>
        <p className="text-4xl">presented by Ermais with Sv443</p>
      </div>
      <div className="bg-green-600 flex-3 flex flex-col">
        <div className="flex justify-center m-4 flex-col items-center">
          <button
            onClick={() => fetchJoke()}
            className="bg-amber-300 p-2 w-fit "
          >
            Generate a joke
          </button>
          <div className="flex flex-col items-center">
            <p className="">A joke by category</p>

            <div className="flex gap-2">
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

        <div>{joke}</div>
      </div>
    </div>
  );
}

export default App;
