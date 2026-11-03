export default function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Ember & Oak, back to top">
        Saffron &amp; Ember
      </a>
      <nav className="site-nav" aria-label="Main">
        <a href="#menu">Menu</a>
        <a href="#visit">Hours</a>
        <a className="btn btn-small" href="#reserve">
          Reserve a table
        </a>
      </nav>
    </header>
  );
}
