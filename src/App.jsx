import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import FeaturedSection from "./components/FeaturedSection";
import SearchFilter from "./components/SearchFilter";
import TrendingTools from "./components/TrendingTools";
import ToolsGrid from "./components/ToolsGrid";
import ToolModal from "./components/ToolModal";
import AdBanner from "./components/AdBanner";
import Footer from "./components/Footer";
import { tools } from "./data/tools";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTool, setSelectedTool] = useState(null);

  const categories = useMemo(() => {
    return ["All", ...new Set(tools.map((tool) => tool.category))];
  }, []);

  const trendingTools = useMemo(() => {
    return tools.filter((tool) => tool.trending);
  }, []);

  const featuredTools = useMemo(() => {
    return tools.filter((tool) =>
      ["ChatGPT", "Midjourney", "Runway"].includes(tool.name)
    );
  }, []);

  const filteredTools = useMemo(() => {
    const searchText = searchTerm.trim().toLowerCase();

    return tools.filter((tool) => {
      const matchesCategory =
        selectedCategory === "All" || tool.category === selectedCategory;

      const matchesSearch =
        searchText === "" ||
        tool.name.toLowerCase().includes(searchText) ||
        tool.description.toLowerCase().includes(searchText) ||
        tool.category.toLowerCase().includes(searchText) ||
        tool.pricing.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
  };

  return (
    <div className="app">
      <Navbar />
      <Hero />

      <StatsSection
        totalTools={tools.length}
        totalCategories={categories.length - 1}
        totalTrending={trendingTools.length}
      />

      <div className="container">
        <FeaturedSection tools={featuredTools} onOpenTool={setSelectedTool} />

        <AdBanner text="Ad Space — Top Banner (Google Ads later)" />

        <SearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onResetFilters={handleResetFilters}
        />

        <TrendingTools tools={trendingTools} onOpenTool={setSelectedTool} />

        <AdBanner text="Ad Space — Middle Banner / Affiliate Promotion" />

        <ToolsGrid
          tools={filteredTools}
          onOpenTool={setSelectedTool}
          selectedCategory={selectedCategory}
          searchTerm={searchTerm}
        />
      </div>

      <Footer />

      <ToolModal tool={selectedTool} onClose={() => setSelectedTool(null)} />
    </div>
  );
}

export default App;