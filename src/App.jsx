import { useState } from "react";
import MainPage from "./MainPage";
import FavoritePage from "./pages/favoritePage/FavoritePage";
import { FavouriteContext } from "./context/FavContext";
import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/homePage/HomePage";
import NavBar from "./components/navBar/NavBar";
import DiscoverPage from "./pages/discoverPage/DiscoverPage";
import AboutPage from "./pages/aboutPage/AboutPage";

function App() {
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favs")) || [],
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
    <div>
      <BrowserRouter>
        <FavouriteContext.Provider
          value={{ favourites, setFavourites, addFavourite }}
        >
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/discover" element={<DiscoverPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="favourites" element={<FavoritePage />} />
          </Routes>
          <Footer />
        </FavouriteContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
