import dataSite from "./data"


const intro = dataSite[0].intro;


export default function Intro(){


    return(
        <section className="intro">
            <div className="wrapper">
                <div className="intro__block" data-aos="zoom-in-up">
                    <h3>Posted on <span className="hThreeBold">startup</span></h3>
                    <h1>Step-by-step guide to choosing<br/> great font pairs</h1>
                    <p>By <a href="#" className="pYellow">James West</a> | May 23, 2022 </p>
                    <p className="pTwo">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br/>fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    <button className="btn yellow">{intro.btn.rM}</button>
                </div>
            </div>
        </section>
    )
}
