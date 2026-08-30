import audience from "../../assets/images/original.avif";
import "./WhatPeopleGot.css";
export default function WhatPeopleGot() {
  return (
    <section className="whatPeopleGot-wrapper">
      <div className="wpg-inner-wrapper">
        <div className="text-wrapper">
          <p>
            It is not because of Dave Chappelle (obviously) they are laughing
            this much, someone is reading jokes from this website <br />
            (Source. Trust me, I was there)
          </p>
        </div>
        <div className="image-wrapper">
          <img src={audience} alt="people laughing in a hall" />
        </div>
      </div>
    </section>
  );
}
