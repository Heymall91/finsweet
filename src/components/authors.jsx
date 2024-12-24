import dataSite from "./data";


// photos import

import floyd from '../styles/style-components/img/authorImages/floyd.jpg'
import dianne from '../styles/style-components/img/authorImages/dianne.jpg'
import jenny from '../styles/style-components/img/authorImages/jenny.jpg'
import leslie from '../styles/style-components/img/authorImages/leslie.jpg'


// socNet svg pictures


import fbL from '../styles/style-components/img/socNets/dark/fbL.svg'
import xL from '../styles/style-components/img/socNets/dark/xL.svg'
import instaL from "../styles/style-components/img/socNets/dark/instaL.svg"
import inL from '../styles/style-components/img/socNets/dark/inL.svg'


const authorItem = dataSite[0].authors;


const AuthorProfile = (props) => 
    <div className="author__profile__item" data-aos={props.slide}>
        <img src={props.photo} alt="author photo"/>
        <h4>{props.name}</h4>
        <p>{props.des} <a href={props.comLink}>{props.comLink}</a></p>
        <div className="social__net">
            <a href="https://www.facebook.com/" target="_blank"><img src={props.fbL} alt="Facebook"/></a>
            <a href="https://x.com/?lang=pl&mx=2" target="_blank"><img src={props.xL} alt="X"/></a>
            <a href="https://www.instagram.com/" target="_blank"><img src={props.instaL} alt="Insta"/></a>
            <a href="https://ru.linkedin.com/" target="_blank"><img src={props.inL} alt="In"/></a>
        </div>
    </div>


export default function Authors(){
    return(
    <section className="authors">
        <div className="wrapper">
            <div className="authors__block">
            <h2>{authorItem.listAhead}</h2>
                <div className="authors__block__items">
                    <AuthorProfile photo={floyd} slide={"zoom-out-up"} name={authorItem.first.name} des={authorItem.first.des} comLink={authorItem.first.comLink}
                    fbL={fbL} xL={xL} instaL={instaL} inL={inL}
                    />
                    <AuthorProfile photo={dianne} slide={"zoom-out-down"} name={authorItem.second.name} des={authorItem.second.des} comLink={authorItem.second.comLink}
                    fbL={fbL} xL={xL} instaL={instaL} inL={inL}
                    />
                    <AuthorProfile photo={jenny} slide={"zoom-out-up"} name={authorItem.third.name} des={authorItem.third.des} comLink={authorItem.third.comLink}
                    fbL={fbL} xL={xL} instaL={instaL} inL={inL}
                    />
                    <AuthorProfile photo={leslie} slide={"zoom-out-down"} name={authorItem.fourth.name} des={authorItem.fourth.des} comLink={authorItem.fourth.comLink}
                    fbL={fbL} xL={xL} instaL={instaL} inL={inL}
                    />
                    
                </div>
            </div>
        </div>
    </section>
    )
}
