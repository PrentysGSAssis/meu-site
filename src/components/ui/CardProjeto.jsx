const Card = ({ imageSrc, title, text, linkText, linkUrl, cardWidth }) => {
  return (
    <div className="card" style={{ width: cardWidth || "18rem" }}>
      <img
        src={imageSrc || "https://placehold.co/250x250"}
        className="card-img-top"
        alt={title || "Card image"}
      />

      <div className="card-body">
        <h5 className="card-title">{title || "Card title"}</h5>

        <p className="card-text">
          {text || "Some quick example text to build on the card title and make up the bulk of the card’s content."}
        </p>

        <a href={linkUrl || "#"} className="btn btn-primary" target="_blank">
          {linkText || "Go somewhere"}
        </a>
      </div>
    </div>
  );
};

export default Card;
