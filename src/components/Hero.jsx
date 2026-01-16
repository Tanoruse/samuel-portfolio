export default function Hero({ person }) {
  return (
    <section id="top" className="hero">
      <div className="heroInner">
        <div className="pill">
          <span className="dot" />
          {person.role} • {person.location}
        </div>

        <h1 className="h1">{person.headline}</h1>

        <p className="lead">
          Building with <b>React</b>, <b>.NET</b>, and <b>cloud services</b>. Focused on shipping clean features,
          performance, and reliability.
        </p>

        <div className="heroBtns">
          <a className="btn primary" href="#projects">View Projects</a>
          <a className="btn" href="#contact">Contact</a>
        </div>

        <div className="heroStats">
          <div className="stat">
            <div className="statNum">3+</div>
            <div className="statLabel">Live/complete projects</div>
          </div>
          <div className="stat">
            <div className="statNum">Cloud</div>
            <div className="statLabel">AWS + Firebase experience</div>
          </div>
          <div className="stat">
            <div className="statNum">Quality</div>
            <div className="statLabel">Testing + debugging mindset</div>
          </div>
        </div>
      </div>
    </section>
  );
}
