import Facebook from "./imgs/Vector.png";
import Instagram from "./imgs/Vector (1).png";
import Twitter from "./imgs/Vector (2).png";
import Youtube from "./imgs/Vector (3).png";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <div className="social">
                <div>
                <Link to="/"><img src={Facebook} alt="" /></Link>
                </div>
                <div>
                <Link to="/"><img src={Instagram} alt="" /></Link>
                </div>
                <div>
                <Link to="/"><img src={Twitter} alt="" /></Link>
                </div>
                <div>
                <Link to="/"><img src={Youtube} alt="" /></Link>
                </div>
            </div>
            <div className="links">
                <ul className="footerList">
                    <li>
                        Conditions of Use
                    </li>
                    <li>
                        Privacy & Policy
                    </li>
                    <li>
                        Press Room
                    </li>
                </ul>
            </div>
            <div className="txt">
                <p >
                    © 2021 MovieBox by Adriana Eka Prayudha
                </p>
            </div>
        </div>
    )
}

export default Footer;