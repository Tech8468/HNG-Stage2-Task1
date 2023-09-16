import { Link } from "react-router-dom";
import Pix1 from "./imgs/tv.png";
import Pix2 from "./imgs/Ellipse 1.png";
import {AiOutlineSearch} from "react-icons/ai"
import React from "react";
import { useState, useEffect } from "react";


function Nav() {

    const [searchMovie, setSearchMovie] = useState('');

    const searchMovieRequest = async (searchMovie) => {

        const url = "https://api.themoviedb.org/3/search/movie?api_key=7c8e662c141d552a09c780fb61d3f40d";

        const response = await fetch(url);

        const data = await response.json();

        if (data.search){
            setSearchMovie(data.search);
        }
        console.log(data);        

    };

    useEffect(() => {

            searchMovieRequest(searchMovie);

    }, [searchMovie]);



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
            <div className="search" onClick={searchMovieRequest}>
                <input type="text" className="txt" placeholder="What do you want to watch?" 
                value={searchMovie.value} onChange={(e) => setSearchMovie(e.target.value)} 
                />
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