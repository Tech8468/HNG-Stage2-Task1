import Nav from "./Nav";
import Pix1 from "./imgs/IMOb.png"
import Pix2 from "./imgs/PngItem_1381056 1.png"
import Pix3 from "./imgs/Play.png"
import React from "react";
import { useState, useEffect } from "react";


function Banner() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=7c8e662c141d552a09c780fb61d3f40d')
            .then((resp) => resp.json())
            .then((data) => {
                let slicedData = data.results;
                slicedData = slicedData.slice(0, 1);
                console.log(slicedData);
                setMovies(slicedData)
                setLoading(false)

            }


            )


          
            setMovies();

    }, []);




    return (
        <div>
        {loading === true ? (
            <div>Loading, please wait...</div>
        ) : (
            movies.map((movie) => (

        <div className="banner" style={{ 
            width: "100%",
            height: "600px",
            backgroundRepeat: "no-repeat", 
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            backgroundSize: "cover",
            }}>

            <div className="header" >
                <Nav />
            </div>
                                
                
            <div className="descriptionBox">
                <div className="dB-text1">
                    <h1 >{movie.original_title}</h1>
                </div>
                <div className="rating" >
                    <div className="imdb-icon">
                        <img src={Pix1} alt="" />
                        <p>{movie.vote_average}/100</p>
                    </div>
                    <div className="rt-icon">
                        <img src={Pix2} alt="" />
                        <p>97%</p>
                    </div>
                </div>
                <div className="db-text2">
                    <p>{movie.overview}</p>
                </div>
                <div className="db-button">
                    <img src={Pix3} alt="" />
                    <p>WATCH LATER</p>
                </div>
            </div>




        </div>
        ))
        )
        }
        </div>
    )
}

export default Banner;