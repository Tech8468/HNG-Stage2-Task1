import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci"
import { BsShare } from "react-icons/bs"
import { BsBookmark } from "react-icons/bs"
import Pix1 from "./imgs/tv.png";
import Pix2 from "./imgs/Home.png";
import Pix3 from "./imgs/Movie Projector.png";
import Pix4 from "./imgs/TV Show.png";
import Pix5 from "./imgs/Calendar.png";
// import Pix6 from "./imgs/Heart.png";
// import Pix7 from "./imgs/Share.png";
// import Pix8 from "./imgs/Bookmark.png";
import Pix9 from "./imgs/Star.png";
import Pix10 from "./imgs/Two Tickets.png";
import Pix11 from "./imgs/List.png";
import Pix12 from "./imgs/Logout.png";

import React from "react";
import { useState, useEffect } from "react";


function Movies() {
    return (
        <div className="">
            <div className="container">
                <div className="sideBar">
                    <div className="logo">
                        <Link to="/"><img src={Pix1} alt="" /></Link>
                        <Link to="/"><p>MovieBox</p></Link>
                    </div>
                    <div className="dBoard">
                        <Link to="/"><img className="home" src={Pix2} alt="" /></Link>
                        <Link to="/"><p>Home</p></Link>
                    </div>
                    <div className="dBoard">
                        <Link to="/"><img className="movies" src={Pix3} alt="" /></Link>
                        <Link to="/"><p>Movies</p></Link>
                    </div>
                    <div className="dBoard">
                        <Link to="/"><img className="tvSeries" src={Pix4} alt="" /></Link>
                        <Link to="/"><p>TV Series</p></Link>
                    </div>
                    <div className="dBoard">
                        <Link to="/"><img className="calendar" src={Pix5} alt="" /></Link>
                        <Link to="/"><p>Upcoming</p></Link>
                    </div>
                    <div className="ticket">
                        <h1>Play movie quizes and earn free tickets</h1>
                        <p>50k people are playing now</p>
                        <button>Start playing</button>
                    </div>
                    <div className="logout">
                        <Link to="/"><img src={Pix12} alt="" /></Link>
                        <Link to="/"><p>Log out</p></Link>
                    </div>
                </div>
                <div className="dashboardBanner">
                    <div className="banner1">
                        <button>Go to Cart</button>
                    </div>
                    <div className="banner2">
                        <div className="frame1">
                            <div className="col1">
                                <h1>Top Gun: Maverick
                                    <span>• 022 • PG-13 • 2h 10m</span></h1>
                                <Link to="/"><button>Action</button></Link>
                                <Link to="/"><button>Drama</button></Link>
                            </div>
                            <div className="col2">
                                <p>After thirty years, Maverick is still pushing the envelope as a top naval aviator,
                                    but must confront ghosts of his past when he leads TOP GUN's elite graduates
                                    on a mission that demands the ultimate sacrifice from those chosen to fly it.</p>
                            </div>
                            <div className="col3">
                                <p className="director">Director : <Link to="">Joseph Kosinski</Link></p>
                                <p className="writers">Writers :  <Link to="">Jim Cash, Jack Epps Jr,  Peter Craig</Link></p>
                                <p className="stars">Stars : <Link to="">Tom Cruise, Jennifer Connelly, Miles Teller</Link></p>
                            </div>
                            <div className="col4">
                                <div className="box">
                                    <button>Top rated movie #65</button>
                                    <select>
                                        <option value="1">Awards 9 nominations</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="frame2">
                            <div className="col1">
                                <Link to=""><CiHeart className="heart" /></Link>
                                <Link to=""><BsShare className="share" /></Link>
                                <Link to=""><BsBookmark className="bookmark" /></Link>
                                <div className="icons">
                                    <img src={Pix9} alt="" />
                                    <p><span>8.5</span> | 350k</p>
                                </div>
                            </div>
                            <div className="col2">
                                <img src={Pix10} alt="" />
                                <p>See Showtimes</p>
                            </div>
                            <div className="col3">
                                <img src={Pix11} alt="" />
                                <p>More watch options</p>
                            </div>
                            <div className="col4">
                                <div className="col-poster">
                                    <img src={Pix11} alt="" />
                                    <p>The Best Movies and Shows in September</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movies;