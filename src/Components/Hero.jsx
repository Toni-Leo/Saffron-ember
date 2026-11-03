// A deterministic bed of coals: no randomness, so the layout is stable between renders.
const COALS = Array.from({ length: 42 }, (_, i) => ({
  left: (i * 97) % 100,
  bottom: (i * 53) % 62,
  size: 30 + ((i * 17) % 52),
  delay: ((i * 0.37) % 3).toFixed(2),
  rotate: (i * 41) % 360,
}));

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <h1>
          Real fire.Real spice.Real food.
        </h1>
        <div className="hero-sub">
          <p>
            Ember &amp; Oak is a grill with one heat source: split oak, burned down to coals.
            Steak, whole fish and vegetables, seasoned simply and finished over the fire.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#reserve">
              Reserve a table
            </a>
            <a className="btn btn-ghost" href="#menu">
              See the menu
            </a>
          </div>
        </div>
      </div>

      <div className="coal-bed" aria-hidden="true">
        {COALS.map((coal, i) => (
          <span
            key={i}
            className="coal"
            style={{
              left: `${coal.left}%`,
              bottom: `${coal.bottom}%`,
              width: `${coal.size}px`,
              height: `${coal.size * 0.8}px`,
              "--delay": `${coal.delay}s`,
              "--rotate": `${coal.rotate}deg`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
