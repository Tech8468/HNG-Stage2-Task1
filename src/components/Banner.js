import Nav from "./Nav";
import Pix1 from "./imgs/IMOb.png"
import Pix2 from "./imgs/PngItem_1381056 1.png"
import Pix3 from "./imgs/Play.png"

function Banner() {
    return (
        <div className="banner">
            <div className="header">
                <Nav />
            </div>
            <div className="descriptionBox">
                <div className="dB-text1">
                    <h1 >John Wick 3:  Parabellum</h1>
                </div>
                <div className="rating" >
                    <div className="imdb-icon">
                        <img src={Pix1} alt="" />
                        <p>86.0/100</p>
                    </div>
                    <div className="rt-icon">
                        <img src={Pix2} alt="" />
                        <p>97%</p>
                    </div>
                </div>
                <div className="db-text2">
                    <p>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
                </div>
                <div className="db-button">
                    <img src={Pix3} alt="" />
                    <p>WATCH LATER</p>
                </div>
            </div>




        </div>
    )
}

export default Banner;