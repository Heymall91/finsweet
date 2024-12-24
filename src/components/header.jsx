import dataSite from "./data";
import { useState } from "react";
const header = dataSite[0].header;


export default function Header(){

    const[opened, setOpened] = useState(false);




    return(
        <header>
            <div className="wrapper__header">
                <div className="header__block">
                    <div className="header__logo">
                        <span>{header.logo.name}</span>
                    </div>
                    <div className={opened ? 'header__ul__opened' : 'header__ul__btn'}>
                        <ul className="header__ul">
                            <li><a href="#">{header.ul.home}</a></li>
                            <li><a href="#">{header.ul.blog}</a></li>
                            <li><a href="#">{header.ul.about}</a></li>
                            <li><a href="#">{header.ul.contact}</a></li>
                        </ul>
                        <a href="#footer__sub"><button className="btn common">{header.btn.sub}</button></a>
                    </div>
                    <div className="burger__block" onClick={() => setOpened(!opened)}>
                        <div className="burger__item one"></div>
                        <div className="burger__item two"></div>
                        <div className="burger__item three"></div>
                    </div>
                </div>
            </div>
        </header>
    )
}
