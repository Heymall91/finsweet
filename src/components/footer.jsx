import dataSite from "./data"
// import { useNavigate } from "react-router";

// socNet svg pictures


import fbL from '../styles/style-components/img/socNets/light/fbLight.svg'
import xL from '../styles/style-components/img/socNets/light/xLight.svg'
import instaL from "../styles/style-components/img/socNets/light/instaLight.svg"
import inL from '../styles/style-components/img/socNets/light/inLight.svg'




const footer = dataSite[0].footer;

const FSocNet = (props) => 
    <a href="#" target="_blank"><img src={props.svg} alt=""/></a>



export default function Footer(){
    // const navigate = useNavigate();


    return(
        <footer>
            <div className="wrapper">
                <div className="footer__block">
                    <div className="footer__block__ahead">
                        <div className="footer__logo">
                            <span>{footer.logo.name}</span>
                        </div>
                        <div className="footer__ul__btn">
                            <ul className="footer__ul">
                                <li><a href="#">{footer.ul.home}</a></li>
                                <li><a href="#">{footer.ul.blog}</a></li>
                                <li><a href="#">{footer.ul.about}</a></li>
                                <li><a href="#">{footer.ul.contact}</a></li>
                                <li><a href="#">{footer.ul.privacy}</a></li>
                            </ul>
                        </div>
                    </div>
                    <form className="footer__form" action="#" method="post" id="footer__sub">
                        <h2>Subscribe to our news letter to get latest updates and news</h2>
                        <div className="form__block">
                            <input type="email" name='user__email' id="user__email" placeholder="Enter Your Email" required/>
                            <button className="btn yellow">{footer.subscribe.btn}</button>
                        </div>
                    </form>
                    <div className="footer__links">
                        <div className="footer__links__des">
                            <p>{footer.linkDes.first}</p>
                            <span><a href={footer.linkDes.email}>{footer.linkDes.email}</a> <a href={footer.linkDes.tel}>{footer.linkDes.tel}</a></span>
                        </div>
                        <div className="footer__soc__net">
                            <FSocNet svg={fbL}/>
                            <FSocNet svg={xL}/>
                            <FSocNet svg={instaL}/>
                            <FSocNet svg={inL}/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}