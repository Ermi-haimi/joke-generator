import { useState } from "react";
import MainPage from "./MainPage";
import Favourites from "./Favourites";
import { favouriteContext } from "./FavContext";
import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favs")) || []
  );

  function addFavourite(jok) {
    setFavourites((prevFavs) => {
      if (prevFavs.includes(jok)) {
        console.log("removed");
        return prevFavs.filter((item) => item !== jok);
      } else {
        console.log("added");
        return [...prevFavs, jok];
      }
    });
  }

  return (
    <div className="flex flex-col h-screen">
      <BrowserRouter>
        <favouriteContext.Provider
          value={{ favourites, setFavourites, addFavourite }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="favourites" element={<Favourites />} />
          </Routes>
          <Footer />
        </favouriteContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
