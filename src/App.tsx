import './App.css'
import Project from './components/project'

export default function App() {

  return (
    <div className="app-container">
      <nav className="navbar">
              <a href="/"> 
                <h1 className="title">Büşra Kaya</h1>
            </a>
          <div className="navbar-right">
              <a href="https://github.com/bus-ra-kaya" target="_blank">
                <button>
                  <div className="github icon"></div>
                  <span>Github</span>
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
      <main className="description">

        <p>Hello, I'm Büşra. I'm a web developer with experience working with React and integrating 
          RESTful APIs. Currently making a typing speed test application.
        </p>

        <br />
        <h3>Projects</h3>  
      <section className='projects'>
        <Project 
        image={"./weatherby.png"} 
        imageAlt="weather app screenshot" 
        header="WeatherBy"
        description="A minimalistic weather app for keeping track of time and forecast information"
        status="07/2025"
        />

        <Project 
        image={"./type-righter.png"} 
        imageAlt="type speed test screenshot" 
        header="TypeRighter"
        description="A typing speed test with real time data. Currently in development."
        status="In Development"
        />

      </section>
        
      </main>

      <footer>
        2025 © — Büşra Kaya
      </footer>
    </div>
  )
}
