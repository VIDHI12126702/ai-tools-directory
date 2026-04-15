import ToolCard from "./ToolCard";

function ToolsGrid({ tools, onOpenTool, selectedCategory, searchTerm }) {
  let resultText = `Showing ${tools.length} tools`;

  if (searchTerm.trim() && selectedCategory !== "All") {
    resultText = `Showing ${tools.length} results for "${searchTerm}" in ${selectedCategory}`;
  } else if (searchTerm.trim()) {
    resultText = `Showing ${tools.length} results for "${searchTerm}"`;
  } else if (selectedCategory !== "All") {
    resultText = `Showing ${tools.length} tools in ${selectedCategory}`;
  }

  return (
    <section className="section" id="tools">
      <div className="section-header">
        <h2>All AI Tools</h2>
        <p>Search and explore tools by category.</p>
      </div>

      <div className="results-count">{resultText}</div>

      {tools.length > 0 ? (
        <div className="tools-grid">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} onOpenTool={onOpenTool} />
          ))}
        </div>
      ) : (
        <div className="no-results">
          No tools found. Try another search or category.
        </div>
      )}
    </section>
  );
}

export default ToolsGrid;