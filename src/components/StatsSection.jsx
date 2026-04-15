function StatsSection({ totalTools, totalCategories, totalTrending }) {
  const stats = [
    { id: 1, value: `${totalTools}+`, label: "AI Tools" },
    { id: 2, value: `${totalCategories}`, label: "Categories" },
    { id: 3, value: `${totalTrending}`, label: "Trending Tools" }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((item) => (
            <div key={item.id} className="stat-card">
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;