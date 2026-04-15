function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <div className="hero-badge">Discover • Compare • Explore</div>

        <h1>Find the Best AI Tools for Work, Creativity, and Growth</h1>

        {/* ✅ IMPORTANT: Added strong intro text (AdSense + SEO friendly) */}
        <p className="hero-desc">
          Explore 50+ AI tools for chat, image generation, video creation,
          writing, coding, productivity, marketing, and more — all in one clean,
          easy-to-use platform.
        </p>

        {/* Existing subtitle (kept but improved slightly) */}
        <p className="hero-subtitle">
          Discover trending AI tools, compare features, and find the perfect
          solution to boost your workflow and creativity.
        </p>

        <div className="hero-actions">
          <a href="#tools" className="hero-btn primary-btn">
            Explore Tools
          </a>

          <a href="#trending" className="hero-btn secondary-btn">
            View Trending
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;