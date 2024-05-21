import "./app.scss"
import Navbar from "./components/navbar/Navbar";
const App = () => {
  return(<div>
    <section id="Homepage">
      <Navbar/>
    </section>
    <section id="Services">Parallex</section>
    <section id="Portfolio">Services</section>
    <section id="About">Parallex</section>
    <section id="Contacts" >Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section>Contact</section>
  </div>
  )
};

export default App;
