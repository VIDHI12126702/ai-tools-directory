function SearchFilter({
  searchTerm,
  setSearchTerm,
  categories,
  selectedCategory,
  setSelectedCategory,
  onResetFilters
}) {
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearchTerm("");
  };

  return (
    <section className="search-filter-section" id="search">
      <div className="section-header">
        <h2>Find Your Tool</h2>
        <p>Select a category to see only that category tools.</p>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search by tool name, category, pricing, or keyword..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="filter-actions-row">
        <div className="categories">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={selectedCategory === category ? "active" : ""}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="reset-btn"
          onClick={onResetFilters}
        >
          Reset Filters
        </button>
      </div>
    </section>
  );
}

export default SearchFilter;