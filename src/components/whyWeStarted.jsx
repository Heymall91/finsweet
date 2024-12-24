import dataSite from "./data"
import imageOne from "../styles/style-components/img/whyWeAre/imageOne.jpg"


const whyWe = dataSite[0].whyWeStarted;


export default function WhyWeStarted(){

    return(
        <section className="whyWe">
            <div className="wrapper">
                <div className="whyWe__block">
                    <img src={imageOne} alt="" />
                    <div className="whyWe__img__text">
                        <h4>{whyWe.hFour}</h4>
                        <h2>{whyWe.hTwo}</h2>
                        <p>{whyWe.des}</p>
                        <button className="btn yellow" type="submit">{whyWe.btnDes}</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
