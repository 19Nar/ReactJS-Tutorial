import React from 'react'
import Popup from "reactjs-popup";
import '../netflix.css'
function MovieList({ movielist }) {
    return (
        <div className="box">

            {console.log(movielist)}
            {
                movielist.map((movie, index) => (
                    <Popup key={movie.id} trigger={

                        <a href="#" className="button"><img src={'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces' + movie.poster_path}></img></a>

                    } modal>
                        {close => (
                            <div className="modal">
                                <a className="close" onClick={close}>
                                    &times;
                    </a>
                                <div className="header title"> {movie.original_title} </div>
                                <div className="content poster">
                                    <img src={'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces' + movie.poster_path}></img>

                                    <div className="meta-info">
                                        <p className="releasedate">
                                            {movie.release_date}
                                        </p>
                                        <p className="popularity">
                                            {movie.popularity}
                                        </p>
                                        <p className="overview">
                                            {movie.overview}
                                        </p>
                                    </div>

                                </div>
                                <div className="actions">

                                    <button
                                        className="button exit"
                                        onClick={() => {
                                            console.log("modal closed ");
                                            close();
                                        }}
                                    >
                                        exit
                      </button>
                                </div>
                            </div>
                        )}
                    </Popup>
                ))
            }

        </div>
    )
}

export default MovieList


/*
*/