import { Link } from "react-router-dom";
import Pix1 from "./imgs/tv.png";
import Pix2 from "./imgs/Ellipse 1.png";
import {AiOutlineSearch} from "react-icons/ai"
function Nav() {
    return (
        <div className="navBar">
            <div className="imgTv">
                <Link to="/">
                    <img src={Pix1}  alt="" />
                </Link>
                <Link to="/">
                    <h1>MovieBox</h1>
                </Link>
            </div>
            <div className="search">
                <input type="text" className="txt" placeholder="What do you want to watch?"  />
                <AiOutlineSearch  className="searchIcon"/>
            </div>
            <div className="navSignin">
                <Link to="/">Sign in</Link>
                <Link to="/">
                    <img src={Pix2}  alt="" />
                </Link>
            </div>
            
            
        </div>
    )
}

export default Nav;