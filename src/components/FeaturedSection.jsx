function FeaturedSection({ tools, onOpenTool }) {
  return (
    <section className="section featured-section">
      <div className="section-header">
        <h2>Featured Tools</h2>
        <p>Top picks across the most popular AI categories.</p>
      </div>

      <div className="featured-grid">
        {tools.map((tool) => (
          <div key={tool.id} className="featured-card">
            <span className="featured-tag">{tool.category}</span>
            <h3>{tool.name}</h3>
            <p>{tool.description}</p>

            <div className="featured-actions">
              <button
                type="button"
                className="featured-btn"
                onClick={() => onOpenTool(tool)}
              >
                View Details
              </button>

              <a
                href={tool.link}
                target="_blank"
                rel="noreferrer"
                className="featured-link-btn"
              >
                Visit Tool
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedSection;