import React from 'react';
import propTypes from 'prop-types'
import './Movie.css';


function Movie({title,poster,genres,synopsis}) {
    return (
        <div>
            <MoviePoster poster={poster}/>
            <h1>{title}</h1>
            <h4>{genres}</h4>
            <h3>{synopsis}</h3>
        </div>
    )
}

function MoviePoster({poster}){
    return (
        <img src={poster}/>
    )
}

Movie.propTypes = {
    title: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.array.isRequired,
    synopsis: propTypes.string.isRequired,
}

MoviePoster.propTypes = {
    poster: propTypes.string.isRequired
}
export default Movie