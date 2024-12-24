

// svg files


import one from "../styles/style-components/img/logosBlock/Logo1.svg"
import two from "../styles/style-components/img/logosBlock/Logo2.svg"
import three from "../styles/style-components/img/logosBlock/Logo3.svg"
import four from "../styles/style-components/img/logosBlock/Logo4.svg"
import five from "../styles/style-components/img/logosBlock/Logo5.svg"


const LogoSVG = (props) => 
    <img className={props.className} src={props.img} alt="company logo" />

function Features(){

    return(
        <section className="features">
            <div className="wrapper">
                <div className="features__block">
                    <div className="features__des">
                        <p>We are</p>
                        <h4>Featured in</h4>
                    </div>
                    <LogoSVG className={"partners one"} img={one}/>
                    <LogoSVG className={"partners two"} img={two}/>
                    <LogoSVG className={"partners three"} img={three}/>
                    <LogoSVG className={"partners four"} img={four}/>
                    <LogoSVG className={"partners five"} img={five}/>
                </div>
            </div>
        </section>
    )
}


export default Features;