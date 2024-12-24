import dataSite from "./data";

const jU = dataSite[0].joinUs;

export default function JoinUs(){
    return(
        <div className="section joinUs">
            <div className="wrapper">
                <div className="joinUs__block" data-aos="fade-left">
                    <h2>{jU.hTwo}</h2>
                    <p>{jU.des}</p>
                    <a href="#" className="btn yellow">{jU.btn}</a>
                </div>
            </div>
        </div>
    )
}