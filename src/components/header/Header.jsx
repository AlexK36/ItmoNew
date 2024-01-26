import "./header.css"
import imgLogo from "../img/logo.png"
import imgRus from "../img/RUS.svg"
import imgEng from "../img/ENG.svg"
import imgDown from "../img/Down.svg"
import React, { useState } from "react";


const Header = () => {
    const [open, setOpen] = useState(false)
    const [lang, setLang] = useState(true)
    const showModal = () => setLang(!lang)
    return(
        <div className="section__one">
            <div className="header">
            <img className="header__logo" src={imgLogo} alt="#" />
            <div className="header__nonactvie">
            <ul onClick={() =>setOpen(!open)} className="header_lang">
                <li><img className="header__rus" src={lang ? imgRus: imgEng} alt="#" /></li>
                <li className="header__rus-text"><a href="#">{lang ? "Рус" : "Eng"}</a></li>
                <li><img src={imgDown} alt="#" /></li>
                <ul className={open ? "header__ul open" : "header__ul"}>
                        <li onClick={showModal} className="header__image"><img className="header__rus" src={imgRus} alt="#" /></li>
                        <li onClick={showModal} className="header__rus-text"><a className="a_act" href="#">Рус</a></li>
                        <li onClick={showModal} className="header__image"><img className="header__rus" src={imgEng} alt="#" /></li>
                        <li onClick={showModal} className="header__rus-text"><a className="a_act" href="#">Eng</a></li>
                </ul> 
            </ul>
            </div>
        </div>
        </div>
    )
}

export default Header
