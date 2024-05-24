import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import Parallex from "./components/parallex/Parallex";
import Services from "./components/Services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contacts from "./components/contacts/Contacts";
const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Home />
      </section>
      <section id="Services">
        <Parallex type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallex type="portfolio" />
      </section>
        <Portfolio/>
      <section id="Contacts">
        <Contacts/>
      </section>
    </div>
  );
};

export default App;
