import React from "react";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({ title, poster_path, vote_average, overview }) => {
    return (
        <div className="movie">
            <img className="movie-img" src={API_IMG + poster_path}></img>
            <div className="movie-info">
                <div>
                    <h5>{title}</h5>
                    <h5><span className="star"> &#9733; </span>{vote_average}/10</h5>
                </div>
                <span>
                    <div>
                        <button type="button" className="btn"><i class="material-icons orangewhite md-48">play_arrow</i></button>
                    </div>
                </span>
            </div>

        </div>

    )
}

export default MovieBox;