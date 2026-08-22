// Desestruturação clara das props com valores padrão (Default Params)
const Card = ({ 
  title = "Título do Projeto", 
  text = "Descrição do projeto...", 
  linkUrl = "#", 
  linkText = "Acessar", 
  imageSrc = "https://placehold.co/400x250",
  imageAlt
}) => {
  return (
    
    <div className="card h-100 shadow-sm border-0">
      <img
        src={imageSrc}
        className="card-img-top object-fit-cover"
        alt={imageAlt || title}
        height="200"
      />

      
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">{title}</h5>
        
        
        <p className="card-text text-muted flex-grow-1">
          {text}
        </p>

        <a
          href={linkUrl}
          className="btn btn-outline-primary mt-auto w-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default Card;