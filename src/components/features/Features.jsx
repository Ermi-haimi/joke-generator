import "./Features.css";
export default function Features() {
  return (
    <section className="features-section">
      <div className="like-feature-wrapper">
        <div>LIKE</div>
        <p>
          Like a joke and add it to favorites to get when you come back anytime.
        </p>
      </div>
      <div className="copy-feature-wrapper">
        <div>CATEGORIES</div>
        <p>
          Explore joke of different categories, such as dark, puns, programming
          and others
        </p>
      </div>
      <div className="share-feature-wrapper">
        <div>SHARE</div>
        <p>
          Or press a button and share a joke to your friend (I know they are
          sharing worthy)
        </p>
      </div>
    </section>
  );
}
