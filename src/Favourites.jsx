import { useContext } from "react";
import { favouriteContext } from "./FavContext";
import { FaTimesCircle } from "react-icons/fa";

function Favourites() {
  const { favourites, addFavourite } = useContext(favouriteContext);
  if (favourites.length === 0) {
    return (
      <div className="bg-blue-400 flex flex-1 justify-center items-center text-white  text-2xl gap-8 font-bold">
        YOU DON"T HAVE ANY FAVOURITE JOKES
      </div>
    );
  }
  return (
    <div className="bg-blue-400 flex-1 *:text-white flex flex-col p-2 *:text-2xl gap-8 font-bold">
      {favourites.map((joke, index) => (
        <div key={index} className="flex border p-2 justify-between">
          {joke}
          <button
            className="text-red-600 p-2 m-1"
            onClick={() => addFavourite(joke)}
          >
            <FaTimesCircle />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Favourites;
