import dataSite from "./data";

// svg

import businessSVG from "../styles/style-components/img/category/Business.svg"
import economySVG from "../styles/style-components/img/category/Economy.svg"
import startUpSVG from "../styles/style-components/img/category/StartUp.svg"
import technologySVG from "../styles/style-components/img/category/Technology.svg"


const category = dataSite[0].category;

const CItmes = (props) => (
    <div className="category__item" data-aos="zoom-in-up">
        <img src={props.svg} alt="" />
        <h4>{props.hFour}</h4>
        <p>{props.des}</p>
    </div>
)



export default function Category(){
    return(
        <section className="category">
            <div className="wrapper">
                <div className="category__block">
                    <h2>{category.ahead}</h2>
                    <div className="category__block__items">
                        <CItmes svg={businessSVG} hFour={category.items.one.hFour} des={category.items.one.des}/>
                        <CItmes svg={economySVG} hFour={category.items.two.hFour} des={category.items.two.des}/>
                        <CItmes svg={startUpSVG} hFour={category.items.three.hFour} des={category.items.three.des}/>
                        <CItmes svg={technologySVG} hFour={category.items.four.hFour} des={category.items.four.des}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
