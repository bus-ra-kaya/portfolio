import {useTranslation} from "react-i18next";

export default function LangToggle(){
    const {i18n, t} = useTranslation();


    function toggleLanguage(){
        i18n.changeLanguage(i18n.language === "en" ? "tr" : "en")
    }

    return (
        <button title={t ("switchLang")} onClick={toggleLanguage}>
            <div className="world icon"></div>
        </button>
    )
}