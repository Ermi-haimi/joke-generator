import { FaCheckCircle, FaHeart, FaTimesCircle } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { FavoriteContext } from "../../context/FavContext";
import ShareButtons from "../shareButtons/ShareButtons";
import "./JokeCard.css";

export default function JokeCard({ joke }) {
  const { favorites, addFavorite } = useContext(FavoriteContext);

  const isMessage =
    joke === "" ||
    joke === "Oops! Failed to fetch a joke. Try again!" ||
    joke === "you haven't generate any joke" ||
    joke === "You have seen all the jokes you generated, generate a new joke!";

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favorites));
  }, [favorites]);
  return (
    <div className="joke-display">
      <div className="joke-text">
        {joke}

        {!isMessage && (
          <button onClick={() => addFavorite(joke)}>
            {favorites.includes(joke) ? <FaTimesCircle /> : <FaHeart />}
          </button>
        )}
      </div>

      {!isMessage && <ShareButtons joke={joke} />}
    </div>
  );
}
