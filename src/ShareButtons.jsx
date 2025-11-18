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
    <div className="flex flex-col">
      <button onClick={share}> Share</button>
      <div className="flex gap-2">
        <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer">
          <button>
            <FaWhatsapp className="text-green-400" />
          </button>
        </a>
        <a href={shareLinks.telegram} target="_blank" rel="noopener noreferrer">
          <button>
            <FaTelegramPlane className="text-white" />
          </button>
        </a>
      </div>
    </div>
  );
}

export default ShareButtons;
