import ToolCard from "./ToolCard";

function TrendingTools({ tools, onOpenTool }) {
  return (
    <section className="section" id="trending">
      <div className="section-header">
        <h2>Top Trending Tools</h2>
        <p>Popular AI tools users are exploring right now.</p>
      </div>

      <div className="tools-grid">
        {tools.slice(0, 6).map((tool) => (
          <ToolCard key={tool.id} tool={tool} onOpenTool={onOpenTool} />
        ))}
      </div>
    </section>
  );
}

export default TrendingTools;