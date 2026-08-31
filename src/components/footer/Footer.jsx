import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-brand">
          <h2>Smile</h2>
          <p>A little laughter can make any day better.</p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <a href="/">Home</a>
          <a href="/discover">Discover</a>
          <a href="/about">About Me</a>
        </div>

        <div className="footer-message">
          <p>
            Find a joke.
            <br />
            Share a laugh.
            <br />
            <span>Smile a little more.</span>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Smile. Using Sv443 Joke API.</p>
        <div className="footer-socials">
          <a href="https://github.com" target="_blank">
            GitHub
          </a>
          <a href="" target="_blank">
            Telegram
          </a>
        </div>
      </div>
    </footer>
  );
}
