import "./Hero.css";
import smiley from "../../assets/images/71XIDaWorpL.png";
export default function Hero() {
  return (
    <header>
      <h1 className="app-name">Smile</h1>
      <div className="motto-pic-wrapper">
        <div className="motto-wrapper">
          <h2 className="motto">
            Finally some funny jokes to make you shrug or{" "}
            <span>smile ear to ear</span>
          </h2>
        </div>

        <div className="hero-picture-wrapper">
          <img src={smiley} alt="" />
        </div>
      </div>
      <h2></h2>
      <div className="random-joke">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          consectetur iusto perferendis
        </p>
      </div>
    </header>
  );
}
