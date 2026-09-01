import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useContext } from "react";
import { FavouriteContext } from "../../context/FavContext";
import ShareButtons from "../ShareButtons/ShareButtons";

export default function JokeCard({ joke }) {
  const { favourites, addFavourite } = useContext(FavouriteContext);

  const isMessage =
    joke === "" ||
    joke === "Oops! Failed to fetch a joke. Try again!" ||
    joke === "you haven't generate any joke" ||
    joke === "You have seen all the jokes you generated, generate a new joke!";

  return (
    <div className="joke-display">
      <div className="joke-text">
        {joke}

        {!isMessage && (
          <button onClick={() => addFavourite(joke)}>
            {favourites.includes(joke) ? <FaTimesCircle /> : <FaCheckCircle />}
          </button>
        )}
      </div>

      {!isMessage && <ShareButtons joke={joke} />}
    </div>
  );
}
