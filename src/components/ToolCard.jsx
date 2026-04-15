import { useState } from "react";

function ToolCard({ tool, onOpenTool }) {
  const fallbackImage =
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80";

  const [imgSrc, setImgSrc] = useState(tool.image || fallbackImage);

  return (
    <div className="tool-card">
      <img
        src={imgSrc}
        alt={tool.name}
        className="tool-image"
        loading="lazy"
        onError={() => setImgSrc(fallbackImage)}
      />

      <div className="tool-content">
        <div className="tool-top">
          <h3>{tool.name}</h3>
          <span className="pricing-tag">{tool.pricing}</span>
        </div>

        <p className="tool-category">{tool.category}</p>
        <p className="tool-description">{tool.description}</p>

        <div className="tool-actions">
          <button
            type="button"
            className="details-btn"
            onClick={() => onOpenTool(tool)}
          >
            View Details
          </button>

          <a
            href={tool.link}
            target="_blank"
            rel="noreferrer"
            className="visit-btn"
          >
            Visit Tool
          </a>
        </div>
      </div>
    </div>
  );
}

export default ToolCard;