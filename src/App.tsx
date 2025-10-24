import './App.css';
import Project from './components/project';
import LangToggle from './components/langToggle';
import {useTranslation} from "react-i18next";

export default function App():React.JSX.Element {
  const { t } = useTranslation();


  return (
    <div className="app-container">
      <nav className="navbar" aria-label={t("mainNav")}>
              <a href="/" className='link' aria-label={t("home")}> 
                <h1 className="title">Büşra Kaya</h1>
            </a>
          <div className="navbar-right">

              <a href="https://github.com/bus-ra-kaya" target="_blank" className='link'
              rel='noopener noreferrer'>
                <button className='nav-btn' aria-label="Github">
                  <div className="github icon"></div>
                  <span>Github</span>
                </button>
              </a>
              <a href="https://www.linkedin.com/in/bus-ra-ka-ya/" target="_blank" className='link'
              rel='noopener noreferrer'>
                <button className='nav-btn' aria-label='Linkedin'>
                  <div className="linkedin icon"></div>
                  <span>Linkedin</span>
                </button>
              </a>
              <LangToggle/>
          </div>
      </nav> 
      <main className="description">

        <p>{t("description")}</p>

        <br />
        <h3>{t("projects")}</h3>  
      <section className='projects' aria-label={t("projects")}>
        <Project 
        image="./weatherby.png"
        imageAlt={t("WeatherBy.alt")}
        header={t("WeatherBy.header")}
        description={t("WeatherBy.desc")}
        status="07/2025"
        tech={t("WeatherBy.tech")}
        github={t("WeatherBy.github")}
      />

      <Project 
        image="./type-righter.png"
        imageAlt={t("TypeRighter.alt")}
        header={t("TypeRighter.header")}
        description={t("TypeRighter.desc")}
        status={t("wip")}
        tech={t("TypeRighter.tech")}
        github={t("TypeRighter.github")}
      />

      </section>
        
      </main>

      <section className="contact" aria-label={t("emailMe")}>
        <h1>{t("createTogether")}</h1>
        <a href="mailto:kaya41@protonmail.com">
          <button className='nav-btn'> 
             kaya41@protonmail.com</button>
        </a>
      </section>

      <footer>
        2025 © — Büşra Kaya
      </footer>
    </div>
  )
}
