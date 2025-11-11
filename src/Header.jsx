import { Link } from "react-router";

function Header() {
  return (
    <div className="bg-linear-to-r from-blue-400 to-cyan-200 p-2">
      <h1 className="text-6xl text-white ">Smile Infinitely</h1>
      <p className="text-2xl text-blue-800">Presented by Ermais with Sv443</p>
      <div className="flex justify-center gap-10">
        <Link to="/favourites">FAVS</Link>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default Header;
