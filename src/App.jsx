import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import Parallex from "./components/parallex/Parallex";
import Services from "./components/Services/Services";
const App = () => {
  return<div>
    <section id="Homepage">
    <Navbar/>
    <Home/>
    </section>
    <section id="Services"><Parallex type="services"/></section>
    <section><Services/></section>
    <section id="Portfolio"><Parallex type="portfolio"/></section>
    <section id="About">Parallex</section>
    <section id="Contacts" >Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section>Contact</section>
  </div>
  
};

export default App;
