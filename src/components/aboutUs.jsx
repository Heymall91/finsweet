import dataSite from "./data";


const aboutUs = dataSite[0].aboutUsBlock;

const AboutDes = (props) => (
    <div className="about__us__des">
        <h4>{props.hFour}</h4>
        {props.hTwo && <h2>{props.hTwo}</h2>}
        {props.hTwoLess && <h2 className="hTwoLess">{props.hTwoLess}</h2>}
        <div className="about__us__text">{props.info}</div>
        {props.rM && <a href="#">{props.rM}</a>}
    </div>
)

export default function AboutUs(){
    return(
    <section className="about__us">
        <div className="wrapper" data-aos="fade-up">
            <div className="about__us__colored">
                <div className="about__us__colored white"></div>
                <div className="about__us__colored yellow"></div>
                <div className="about__us__colored purple"></div>
            </div>
            <div className="about__us__block">
                <AboutDes hFour={aboutUs.firstDes.hFour} hTwo={aboutUs.firstDes.hTwo} info={aboutUs.firstDes.info} rM={dataSite[0].intro.btn.rM}/>
                <AboutDes hFour={aboutUs.secondDes.hFour} hTwoLess={aboutUs.secondDes.hTwo} info={aboutUs.secondDes.info}/>
            </div>
        </div>
    </section>
    )
}
