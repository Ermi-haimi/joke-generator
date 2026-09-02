import { useContext, useEffect } from "react";
import { FavoriteContext } from "../../context/FavContext";
import { FaTimesCircle } from "react-icons/fa";

export default function FavoritePage() {
  const { favourites, addFavourite } = useContext(FavoriteContext);
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favourites));
  }, [favourites]);

  if (favourites.length === 0) {
    return <div className="">YOU DON"T HAVE ANY FAVOURITE JOKES</div>;
  }

  return (
    <div className="">
      {favourites.map((joke, index) => (
        <div key={index} className="">
          {joke}
          <button className="" onClick={() => addFavourite(joke)}>
            <FaTimesCircle />
          </button>
        </div>
      ))}
    </div>
  );
}
