import React from "react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import "./ShareButtons.css";

export default function ShareButtons({ joke }) {
  const encodedJoke = encodeURIComponent(joke);
  const currentUrl = encodeURIComponent(window.location.href);

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodedJoke}`,
    telegram: `https://t.me/share/url?url=${currentUrl}&text=${encodedJoke}`,
  };

  const share = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "A GOOD JOKE",
          text: joke,
          url: window.location.href,
        })
        .catch((error) => console.log("Share Failed:", error));
    } else {
      alert("Your browser does not support native sharing.");
    }
  };

  return (
    <div className="share-buttons">
      <button className="share-main-button" onClick={share}>
        {" "}
        Share
      </button>
      <div className="social-share-buttons">
        <a
          href={shareLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="social-share-link"
        >
          <button className="whatsapp-button">
            <FaWhatsapp />
          </button>
        </a>
        <a
          href={shareLinks.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="social-share-link"
        >
          <button className="telegram-button">
            <FaTelegramPlane />
          </button>
        </a>
      </div>
    </div>
  );
}
