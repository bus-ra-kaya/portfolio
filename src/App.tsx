import './App.css'

export default function App() {

  return (
    <>
     <nav className="navbar">
        <div className="navbar-left">
            <a href="main.html"> 
              <div className="duck icon"></div>
           </a>
        </div>
        <div className="navbar-right">
            <a href="https://github.com/bus-ra-kaya" target="_blank">
              <button>
                <div className="github icon"></div>
                <span>Github</span>
              </button>
            </a>
            <a href="https://www.instagram.com/bus.ra_kaya/" target="_blank">
              <button>
                <div className="instagram icon"></div>
                <span>Instagram</span>
              </button>
            </a>
            <a href="https://www.linkedin.com/in/bus-ra-ka-ya/" target="_blank">
              <button>
                <div className="linkedin icon"></div>
                <span>Linkedin</span>
              </button>
            </a>
        </div>
     </nav> 
     <div className="description">

    <h2>Büşra Kaya</h2>
    <p>Hello, I'm Büşra. A web developer and chess enthusiast based in Turkey.
    I spend most of time learning new  CS concepts, sipping coffee and trying to add value to the world around me.</p>
    <br />

    <h3>Latest Update</h3>
    <p>Currently going over Scrimba's Fullstack Series and making a typing speed test.</p>
     </div>
    </>
  )
}
