import Header from "../src/Components/Header.jsx";
import Hero from "../src/Components/Hero.jsx";
import Menu from "../src/Components/Menu.jsx";
import Reservation from "../src/Components/Reservation.jsx";
import Footer from "../src/Components/Footer.jsx";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#menu">
        Skip to menu
      </a>
      <Header />
      <main>
        <Hero />
        <Menu />
        <Reservation />
      </main>
      <Footer />
    </>
  );
}
