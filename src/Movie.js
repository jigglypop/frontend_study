import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component {
    render(){
        return (
            <div>
                <MoviePoster />
                <h1>hello</h1>
            </div>
            
        )
    }
}

class MoviePoster extends Component {
    render(){
        return (
            <img src="https://i.pinimg.com/originals/d1/1e/c3/d11ec374c68f527bec9a5719e7043fe8.jpg"/>
        )
    }
}


export default Movie