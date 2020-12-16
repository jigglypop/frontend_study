import React, {Component} from 'react';
import propTypes from 'prop-types'
import './Movie.css';


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


export default Movie