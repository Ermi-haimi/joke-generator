import { FaCode, FaGithub, FaHeart, FaReact, FaSmile } from "react-icons/fa";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-section">
        <div className="about-card about-card-main">
          <div className="about-card-icon">
            <FaSmile />
          </div>

          <div>
            <p className="section-label">WHO AM I?</p>
            <h3>
              I like building things
              <br />
              <span>that people actually use.</span>
            </h3>

            <p>
              My name is Ermias Haimanot currently a software engineering
              student at AAU who enjoys creating websites, experimenting with
              new technologies, and turning ideas into something people can
              actually use.
            </p>

            <p>
              Smile started as a simple joke generator when I first found the
              SV433 API and then I built a mobile app with flutter using this
              same API and finally came back to turn it into something more fun,
              interactive, and enjoyable to use.
            </p>
          </div>
        </div>
      </section>

      <section className="tech-section">
        <div className="section-heading">
          <p className="section-label">WHAT'S DID I USE?</p>

          <h2>Built with</h2>
        </div>

        <div className="tech-card">
          <div className="tech-item">
            <FaReact />
            <div>
              <h3>React</h3>
              <p>Building the user interface.</p>
            </div>
          </div>
          <div className="tech-item">
            <FaCode />
            <div>
              <h3>JavaScript</h3>
              <p>Making everything interactive.</p>
            </div>
          </div>
          <div className="tech-item">
            <FaHeart />
            <div>
              <h3>CSS</h3>
              <p>Making it look like its name.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-ending">
        <div className="ending-card">
          <FaSmile className="ending-icon" />

          <h2>
            Thanks for
            <br />
            stopping by!
          </h2>

          <p>Now go find a joke, share it with someone, and make them smile.</p>

          <a
            href="https://github.com/Ermi-Haimi"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            <FaGithub />
            Check out my GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
