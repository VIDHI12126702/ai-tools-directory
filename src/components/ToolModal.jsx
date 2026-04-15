import { useEffect } from "react";

function ToolModal({ tool, onClose }) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (tool) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [tool, onClose]);

  if (!tool) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} type="button">
          ×
        </button>

        <img
          src={tool.image}
          alt={tool.name}
          className="modal-image"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80";
          }}
        />

        <div className="modal-content">
          <div className="modal-top">
            <h2>{tool.name}</h2>
            <span className="pricing-tag">{tool.pricing}</span>
          </div>

          <p className="modal-category">{tool.category}</p>
          <p className="modal-description">{tool.description}</p>

          <div className="modal-info-grid">
            <div className="modal-info-card">
              <h4>Category</h4>
              <p>{tool.category}</p>
            </div>

            <div className="modal-info-card">
              <h4>Pricing</h4>
              <p>{tool.pricing}</p>
            </div>

            <div className="modal-info-card">
              <h4>Status</h4>
              <p>{tool.trending ? "Trending Tool" : "Available Tool"}</p>
            </div>
          </div>

          <div className="modal-actions">
            <a
              href={tool.link}
              target="_blank"
              rel="noreferrer"
              className="visit-btn"
            >
              Visit Official Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolModal;