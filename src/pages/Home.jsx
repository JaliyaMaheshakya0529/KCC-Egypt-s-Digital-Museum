function Home() {
  return (
    <div className="home-container">
      <h1 className="Title1">Welcome to the Digital Museum of</h1>
      <h1 className="Title2">Ancient Egypt</h1>
      <p>Explore ancient Egyptian history, artifacts, and culture through our interactive exhibits.</p>

      <a className="Explore-btn" href="/Timeline"><img src="explore.png" alt="Explore" className="Explore-img" /> Explore</a>

      <img className="Hero-img" src="Hero-img.png" alt="hero-img"></img>

      <div className="Glow"></div>
    </div>
  );
}

export default Home;