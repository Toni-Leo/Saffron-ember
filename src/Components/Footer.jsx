import { hours } from "../Data/Menu";

export default function Footer() {
  return (
    <footer className="site-footer" id="visit">
      <div className="footer-inner">
        <div>
          <p className="footer-brand">Saffron &amp; Ember</p>
          <address>
            14 Workslayout Road
            <br />
            Amakohia-Akwakuma
            <br />
            <a href="tel:+23480344532132">+23480344532132</a>
            <br />
            <a href="mailto:hello@saffronandember.example">hello@saffronandember.example</a>
          </address>
        </div>

        <div>
          <h2 className="footer-heading">Opening hours</h2>
          <dl className="hours">
            {hours.map((h) => (
              <div key={h.days} className="hours-row">
                <dt>{h.days}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <p className="footer-small">© {new Date().getFullYear()} Saffron &amp; Ember</p>
    </footer>
  );
}
