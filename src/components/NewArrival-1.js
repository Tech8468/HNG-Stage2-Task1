// import { Link } from "react-router-dom";
// import Pix1 from "./imgs/Icon (2).png";
import Pix2 from "./imgs/IMOb.png"
import Pix3 from "./imgs/PngItem_1381056 1.png"

import background from "./imgs/Poster4.png";
import { PiHeartThin } from "react-icons/pi";
// import Pix2 from "./imgs/Poster (4).png"


function NewArrival1() {
    return (
        <div className="featuredMovie">
            <div className="title">
               
            </div>
            <div className="movieList">
                <div className="movieCard" data-testid="movie-card">
                    <div className="poster" data-testid="movie-poster" style={{ backgroundImage: `url(${background})` }}>
                        {/* style={{  backgroundImage: `url(${background})`}} */}
                        {/* <img src={Pix2} alt="" /> */}
                        <div className="rating">
                            <div className="elipse"><PiHeartThin className="rating-icon" /></div>
                        </div>
                    </div>
                    <p className="releaseDate" data-testid="movie-release-date">USA, 2016 - Current</p>
                    <h2 data-testid="movie-title">Dunkirk</h2>
                    <div className="rating" >
                        <div className="imdb-icon">
                            <img src={Pix2} alt="" />
                            <p>78.0/100</p>
                        </div>
                        <div className="rt-icon">
                            <img src={Pix3} alt="" />
                            <p>94%</p>
                        </div>
                    </div>
                    <p className="txt" data-testid="movie-description">Action, Adventure / Horror </p>

                </div>
                <div className="movieCard" data-testid="movie-card">
                    <div className="poster" data-testid="movie-poster" style={{ backgroundImage: `url(${background})` }}>
                        {/* style={{  backgroundImage: `url(${background})`}} */}
                        {/* <img src={Pix2} alt="" /> */}
                        <div className="rating">
                            <div className="elipse"><PiHeartThin className="rating-icon" /></div>
                        </div>
                    </div>
                    <p className="releaseDate" data-testid="movie-release-date">USA, 2016 - Current</p>
                    <h2 data-testid="movie-title">Dunkirk</h2>
                    <div className="rating" >
                        <div className="imdb-icon">
                            <img src={Pix2} alt="" />
                            <p>78.0/100</p>
                        </div>
                        <div className="rt-icon">
                            <img src={Pix3} alt="" />
                            <p>94%</p>
                        </div>
                    </div>
                    <p className="txt" data-testid="movie-description">Action, Adventure / Horror </p>

                </div>
                <div className="movieCard" data-testid="movie-card">
                    <div className="poster" data-testid="movie-poster" style={{ backgroundImage: `url(${background})` }}>
                        {/* style={{  backgroundImage: `url(${background})`}} */}
                        {/* <img src={Pix2} alt="" /> */}
                        <div className="rating">
                            <div className="elipse"><PiHeartThin className="rating-icon" /></div>
                        </div>
                    </div>
                    <p className="releaseDate" data-testid="movie-release-date">USA, 2016 - Current</p>
                    <h2 data-testid="movie-title">Dunkirk</h2>
                    <div className="rating" >
                        <div className="imdb-icon">
                            <img src={Pix2} alt="" />
                            <p>78.0/100</p>
                        </div>
                        <div className="rt-icon">
                            <img src={Pix3} alt="" />
                            <p>94%</p>
                        </div>
                    </div>
                    <p className="txt" data-testid="movie-description">Action, Adventure / Horror </p>

                </div>
                <div className="movieCard" data-testid="movie-card">
                    <div className="poster" data-testid="movie-poster" style={{ backgroundImage: `url(${background})` }}>
                        {/* style={{  backgroundImage: `url(${background})`}} */}
                        {/* <img src={Pix2} alt="" /> */}
                        <div className="rating">
                            <div className="elipse"><PiHeartThin className="rating-icon" /></div>
                        </div>
                    </div>
                    <p className="releaseDate" data-testid="movie-release-date">USA, 2016 - Current</p>
                    <h2 data-testid="movie-title">Dunkirk</h2>
                    <div className="rating" >
                        <div className="imdb-icon">
                            <img src={Pix2} alt="" />
                            <p>78.0/100</p>
                        </div>
                        <div className="rt-icon">
                            <img src={Pix3} alt="" />
                            <p>94%</p>
                        </div>
                    </div>
                    <p className="txt" data-testid="movie-description">Action, Adventure / Horror </p>

                </div>
            </div>

        </div>
    )
}

export default NewArrival1;