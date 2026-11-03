import { useState } from "react";
import { categories, CURRENCY } from "../Data/Menu.js";

export default function Menu() {
  const [activeId, setActiveId] = useState(categories[0].id);
  const [vegOnly, setVegOnly] = useState(false);

  const active = categories.find((c) => c.id === activeId);
  const items = vegOnly ? active.items.filter((i) => i.vegetarian) : active.items;

  return (
    <section className="section menu" id="menu" aria-labelledby="menu-title">
      <div className="section-inner">
        <h2 id="menu-title">What's on the fire</h2>

        <div className="menu-controls">
          <div className="tabs" role="tablist" aria-label="Menu sections">
            {categories.map((c) => (
              <button
                key={c.id}
                role="tab"
                id={`tab-${c.id}`}
                aria-selected={c.id === activeId}
                aria-controls="menu-panel"
                tabIndex={c.id === activeId ? 0 : -1}
                className={c.id === activeId ? "tab is-active" : "tab"}
                onClick={() => setActiveId(c.id)}
                onKeyDown={(e) => {
                  const idx = categories.findIndex((x) => x.id === activeId);
                  if (e.key === "ArrowRight") {
                    const next = categories[(idx + 1) % categories.length];
                    setActiveId(next.id);
                    document.getElementById(`tab-${next.id}`)?.focus();
                  }
                  if (e.key === "ArrowLeft") {
                    const prev = categories[(idx - 1 + categories.length) % categories.length];
                    setActiveId(prev.id);
                    document.getElementById(`tab-${prev.id}`)?.focus();
                  }
                }}
              >
                {c.name}
              </button>
            ))}
          </div>

          <label className="toggle">
            <input
              type="checkbox"
              checked={vegOnly}
              onChange={(e) => setVegOnly(e.target.checked)}
            />
            <span>Vegetarian only</span>
          </label>
        </div>

        <div id="menu-panel" role="tabpanel" aria-labelledby={`tab-${activeId}`}>
          {items.length === 0 ? (
            <p className="empty">
              Nothing vegetarian in this section. Turn off the filter or choose another section.
            </p>
          ) : (
            <ul className="dishes">
              {items.map((dish) => (
                <li className="dish" key={dish.name}>
                  <div className="dish-head">
                    <h3>{dish.name}</h3>
                    {dish.vegetarian && (
                      <span className="veg" title="Vegetarian">
                        Vegetarian
                      </span>
                    )}
                    <span className="leader" aria-hidden="true" />
                    <span className="price">
                      {CURRENCY}
                      {dish.price}
                    </span>
                  </div>
                  <p>{dish.description}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        <p className="menu-note">
          Tell us about any allergies when you book or when you sit down. The menu changes with
          what the market and the fire allow.
        </p>
      </div>
    </section>
  );
}
