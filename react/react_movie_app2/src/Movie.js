<<<<<<< HEAD
import React, {Component} from 'react';
=======
import React from 'react';
>>>>>>> react_movie_app2/master
import propTypes from 'prop-types'
import './Movie.css';


<<<<<<< HEAD
class Movie extends Component {

    static propTypes = {
        title: propTypes.string,
        image: propTypes.string,

    }
    render(){
        return (
            <div>
                <MoviePoster image={this.props.image}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class MoviePoster extends Component {
    render(){
        return (
            <img src={this.props.image}/>
        )
    }
}


=======
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
>>>>>>> react_movie_app2/master
export default Movie