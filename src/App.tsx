import './App.css';
import ProjectSort from './components/projectSort';
import LangToggle from './components/langToggle';
import DropdownMenu from './components/dropdownMenu';
import {useTranslation} from "react-i18next";
import { useState } from "react";

export default function App():React.JSX.Element {
  const { t } = useTranslation();

  const [activeFilter, setActiveFilter] = useState<string>("");
  const [activeSortby, setActiveSortby] = useState<string>("");

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const sortingOptions = [t("projectGrouping.newest"), t("projectGrouping.oldest")];
  const filteringOptions = ["HTML/CSS","Javascript", "Typescript", "React", "Node"];


  return (
    <div className="app-container">
      <nav className="navbar" aria-label={t("mainNav")} rel='noopener noreferrer'>
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
        <div className='projects-header'>
          <h3>{t("projects")}</h3>  
          <div className='project-btn-container'>

            <DropdownMenu 
              menuName={t("projectGrouping.filterBy")} 
              menuIcon='down-arrow' 
              menuItems = {filteringOptions}
              open= {openDropdown === "filterBy"}
              onToggle= {() => setOpenDropdown(openDropdown === "filterBy" ? null : "filterBy")}
              setActiveItem={setActiveFilter} />

            <DropdownMenu 
              menuName={t("projectGrouping.sortBy")} 
              menuIcon='down-arrow' 
              menuItems = {sortingOptions}
              open = {openDropdown === "sortBy"}
              onToggle={() => setOpenDropdown(openDropdown === "sortBy" ? null : "sortBy")}
              setActiveItem={setActiveSortby} />
              </div>
        </div>

      <section className='projects' aria-label={t("projects")}>
        <ProjectSort activeFilter={activeFilter} activeSortBy={activeSortby} />

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
