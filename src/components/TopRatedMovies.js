import { Link } from "react-router-dom";
import Pix1 from "./imgs/Icon (2).png";
import Pix2 from "./imgs/IMOb.png"
import Pix3 from "./imgs/PngItem_1381056 1.png"

import { PiHeartThin } from "react-icons/pi";

import { useState, useEffect } from "react";




function TopRatedMovies() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=7c8e662c141d552a09c780fb61d3f40d')
            .then((resp) => resp.json())
            .then((data) => {
                let slicedData = data.results;
                slicedData = slicedData.slice(0, 16);
                console.log(slicedData);
                setMovies(slicedData)
                setLoading(false)

            }


            )


    }, []);

    return (
        <div className="featuredMovie">
            <div className="title">
                <h1>Top-rated</h1>
                <Link to='/'><div className="seeMore">
                    <p>See more</p>
                    <img src={Pix1} alt="" />
                </div></Link>
            </div>
            <div className="movieList">
                {loading === true ? (
                    <div>Loading, please wait...</div>
                ) : (
                    movies.map((movie) => (
                       <Link to={`/movie/${movie.id}`}> 
                       <div className="movieCard" data-testid="movie-card" key={movie.id}>
                            <div className="poster" data-testid="movie-poster" style={{ 
                                backgroundRepeat: "no-repeat", 
                                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
                                backgroundSize: "cover",
                                transition: "transform 0.2s"
                                }}>
                                <div className="rating">
                                    <div className="elipse">
                                        <PiHeartThin className="rating-icon" />
                                    </div>
                                </div>
                            </div>
                            <p className="releaseDate" data-testid="movie-release-date">USA, {movie.release_date} - Current</p>
                            <h2 data-testid="movie-title">{movie.title}</h2>
                            <div className="movie-rating" >
                                <div className="imdb-icon">
                                    <img src={Pix2} alt="" />
                                    <p>{movie.vote_average}/{movie.vote_count}</p>
                                </div>
                                <div className="rt-icon">
                                    <img src={Pix3} alt="" />
                                    <p>94%</p>
                                </div>
                            </div>
                            <p className="txt" data-testid="movie-description">Action, Adventure / Horror </p>

                        </div>
                        </Link>
                    ))
                )
                }
            </div>
        </div>
    )
};

export default TopRatedMovies;