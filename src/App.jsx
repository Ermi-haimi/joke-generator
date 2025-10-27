import { useState, useEffect, Fragment } from "react";
import axios from "axios";

function App() {
  const [joke, setJoke] = useState("");
  const apiLink = "https://v2.jokeapi.dev/joke/Any?format=txt&";

  async function fetchJoke() {
    let response = await axios.get(apiLink);

    setJoke(response.data);
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-blue-400 p-2">
        <h1 className="text-6xl text-white ">Laugh Infinnitely</h1>
        <p className="text-4xl">presented by Ermais with Sv443</p>
      </div>
      <div className="bg-green-600 flex-3 flex flex-col">
        <div className="flex justify-center m-4 flex-col items-center">
          <button onClick={fetchJoke} className="bg-amber-300 p-2 w-fit ">
            Joke
          </button>
        </div>

        <div>{joke}</div>
      </div>
    </div>
  );
}

export default App;
