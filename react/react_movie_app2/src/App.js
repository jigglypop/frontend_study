<<<<<<< HEAD
import React, {Component}from 'react';
=======
import React, { Component } from 'react';
>>>>>>> react_movie_app2/master
import logo from './logo.svg';
import './App.css';
import Movie from './Movie'

<<<<<<< HEAD
const movies = [
    {
        title:"A",
        image:"https://pbs.twimg.com/media/EKmYbyYU4AAPCZx.jpg",
    },
    {
        title:"B",
        image:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAF5FV3.img?h=0&w=720&m=6&q=60&u=t&o=f&l=f&x=256&y=238",
    },
    {
        title:"C",
        image:"https://newsimg.sedaily.com/2018/01/10/1RUDHQ3Q9L_1.jpg",
    },
    {
        title:"D",
        image:"https://thumb.pann.com/tc_480/https://fimg4.pann.com/new/download.jsp?FileID=50149891",
    },    
]


class App extends Component {
    state = {
        greeting:'hello'
    }

    componentDidMount(){
        setTimeout(() => (
            this.setState({
                greeting:"Hello again!"
            })
        ),5000)
    }

    render() {
        return ( 
            <div className = "App" >
                {this.state.greeting}
                {movies.map((movie,index)=>{
                    return <Movie title={movie.title} image={movie.image} key={index}/>
                })}     
            </div>
        )
    }

}




=======
class App extends Component {

    state = {}

    componentDidMount(){
        this._getMovies();
    }

    _getMovies = async () => {
        const movies = await this._callApi()
        this.setState({
            movies
        })
    }

    _callApi(){
        return fetch("https://yts.lt/api/v2/list_movies.json?sort_by=rating")
        .then(response => response.json())
        .then(json => json.data.movies)
    }

    _renderMovies = () => {
        const movies = this.state.movies.map(movie => {
            return <Movie 
            title = { movie.title } 
            poster = { movie.medium_cover_image } 
            genres = { movie.genres}
            synopsis = { movie.synopsis }
            key = { movie.id }/>
        })
        return movies
    }
    render() {
        return ( 
            <div className = "App" > 
                {this.state.movies ? this._renderMovies(): "Loading"}
            </div>
        )
    }
}


>>>>>>> react_movie_app2/master
export default App;