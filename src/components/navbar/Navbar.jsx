import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"

const Navbar = () => {
  return<div className="navbar">
       <Sidebar/>
        <div className="wrapper">
            <span>Portfolio</span>
            <div className="social">
            <button onClick={() => handleRedirect("https://www.facebook.com/yourprofile")}>
            <img src="/facebook.png" alt="Facebook" />
          </button>
          <button onClick={() => handleRedirect("https://www.instagram.com/yourprofile")}>
            <img src="/instagram.png" alt="Instagram" />
          </button>
          <button onClick={() => handleRedirect("https://www.github.com/grownsandip")}>
            <img src="/github.png" alt="GitHub" />
          </button>
          <button onClick={() => handleRedirect("https://www.youtube.com/yourchannel")}>
            <img src="/youtube.png" alt="YouTube" />
          </button>
            </div>
        </div>
    </div>
}

export default Navbar;
