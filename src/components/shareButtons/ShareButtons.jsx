import React from "react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

function ShareButtons({ joke }) {
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
    <div className="">
      <button onClick={share}> Share</button>
      <div className="">
        <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer">
          <button>
            <FaWhatsapp className="" />
          </button>
        </a>
        <a href={shareLinks.telegram} target="_blank" rel="noopener noreferrer">
          <button>
            <FaTelegramPlane className="" />
          </button>
        </a>
      </div>
    </div>
  );
}

export default ShareButtons;
