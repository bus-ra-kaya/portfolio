import {useTranslation} from "react-i18next";

export default function LangToggle(): React.JSX.Element{
    const {i18n, t} = useTranslation();


    function toggleLanguage(){
        i18n.changeLanguage(i18n.language === "en" ? "tr" : "en")
    }

    return (
        <button 
        title={t ("switchLang")} 
        onClick={toggleLanguage}
        aria-label={t ("switchLang")}
        className="nav-btn">

            <div className="world icon" aria-hidden="true"></div>
        </button>
    )
}