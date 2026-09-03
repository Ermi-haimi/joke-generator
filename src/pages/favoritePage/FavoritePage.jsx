import { useContext } from "react";
import { FavoriteContext } from "../../context/FavContext";
import JokeCard from "../../components/jokeCard/JokeCard";
import "./FavoritePage.css";
import { FaHeart } from "react-icons/fa";

export default function FavoritePage() {
  const { favorites } = useContext(FavoriteContext);

  return (
    <main className="favorite-page">
      <div className="favorite-page-header">
        <h1>Your Favorite Jokes</h1>
        <p>The jokes you saved because they made you smile.</p>
      </div>

      {favorites.length === 0 ? (
        <section className="empty-favorites">
          <div className="empty-favorites-icon">
            <FaHeart />
          </div>
          <h2>No favorite jokes yet</h2>
          <p>
            When you find a joke you love, save it here and come back anytime.
          </p>
        </section>
      ) : (
        <section className="favorites-grid">
          {favorites.map((joke, index) => (
            <JokeCard key={index} joke={joke} />
          ))}
        </section>
      )}
    </main>
  );
}
