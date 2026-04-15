import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import FeaturedSection from "./components/FeaturedSection";
import SearchFilter from "./components/SearchFilter";
import TrendingTools from "./components/TrendingTools";
import ToolsGrid from "./components/ToolsGrid";
import ToolModal from "./components/ToolModal";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdUnit from "./components/AdUnit";
import { tools } from "./data/tools";
import { useMemo, useState } from "react";

function HomePage({
  tools,
  categories,
  trendingTools,
  featuredTools,
  filteredTools,
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  setSelectedTool
}) {
  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
  };

  return (
    <>
      <Hero />

      <StatsSection
        totalTools={tools.length}
        totalCategories={categories.length - 1}
        totalTrending={trendingTools.length}
      />

      <div className="container">
        <FeaturedSection tools={featuredTools} onOpenTool={setSelectedTool} />

        <section className="section">
          <div className="section-header">
            <h2>Sponsored</h2>
            <p>Advertisement</p>
          </div>
          <AdUnit slot="1234567890" className="top-ad" />
        </section>

        <SearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onResetFilters={handleResetFilters}
        />

        <TrendingTools tools={trendingTools} onOpenTool={setSelectedTool} />

        <section className="section">
          <div className="section-header">
            <h2>Recommended Partners</h2>
            <p>Advertisement</p>
          </div>
          <AdUnit slot="1234567891" className="middle-ad" />
        </section>

        <ToolsGrid
          tools={filteredTools}
          onOpenTool={setSelectedTool}
          selectedCategory={selectedCategory}
          searchTerm={searchTerm}
        />

        <section className="section">
          <div className="section-header">
            <h2>More Sponsored Content</h2>
            <p>Advertisement</p>
          </div>
          <AdUnit slot="1234567892" className="bottom-ad" />
        </section>
      </div>
    </>
  );
}

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTool, setSelectedTool] = useState(null);

  const categories = ["All", ...new Set(tools.map((t) => t.category))];

  const trendingTools = tools.filter((t) => t.trending);

  const featuredTools = tools.filter((t) =>
    ["ChatGPT", "Midjourney", "Runway"].includes(t.name)
  );

  const filteredTools = useMemo(() => {
    const search = searchTerm.toLowerCase().trim();

    return tools.filter((t) => {
      const matchCategory =
        selectedCategory === "All" || t.category === selectedCategory;

      const matchSearch =
        search === "" ||
        t.name.toLowerCase().includes(search) ||
        t.description.toLowerCase().includes(search) ||
        t.category.toLowerCase().includes(search) ||
        t.pricing.toLowerCase().includes(search);

      return matchCategory && matchSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              tools={tools}
              categories={categories}
              trendingTools={trendingTools}
              featuredTools={featuredTools}
              filteredTools={filteredTools}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              setSelectedTool={setSelectedTool}
            />
          }
        />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

      <ToolModal tool={selectedTool} onClose={() => setSelectedTool(null)} />
    </>
  );
}

export default App;