import { Link } from "react-router-dom";
// import Pix1 from "./imgs/Icon (2).png";
import Pix2 from "./imgs/IMOb.png"
import Pix3 from "./imgs/PngItem_1381056 1.png";
import { PiHeartThin } from "react-icons/pi";
import { useState, useEffect } from "react";


function Popular() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c8e662c141d552a09c780fb61d3f40d')
            .then((resp) => resp.json())
            .then((data) => {
                let slicedData = data.results;
                slicedData = slicedData.slice(0, 4);
                console.log(slicedData);
                setMovies(slicedData)
                setLoading(false)

            }


            )


    }, []);

    return (
        <div className="popularMovie">
            <div className="movieList">
                {loading === true ? (
                    <div>Loading, please wait...</div>
                ) : (
                    movies.map((movie) => (
                       <Link to={`/movie/${movie.id}`}> <div className="movieCard" data-testid="movie-card">
                            <div className="poster" data-testid="movie-poster" style={{ 
                                backgroundRepeat: "no-repeat", 
                                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
                                backgroundSize: "cover",
                                }}>
                                <div className="rating">
                                    <div className="elipse"><PiHeartThin className="rating-icon" /></div>
                                </div>
                            </div>
                            <p className="releaseDate" data-testid="movie-release-date">USA, {movie.release_date} - Current</p>
                            <h2 data-testid="movie-title">{movie.title}</h2>
                            <div className="rating" >
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

export default Popular;