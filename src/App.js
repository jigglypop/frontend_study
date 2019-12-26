import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie'

class App extends Component {
    state = {
        greeting:'hello',
        movies: [{
            title: "A",
            image: "https://pbs.twimg.com/media/EKmYbyYU4AAPCZx.jpg",
        },
        {
            title: "B",
            image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAF5FV3.img?h=0&w=720&m=6&q=60&u=t&o=f&l=f&x=256&y=238",
        },
        {
            title: "C",
            image: "https://newsimg.sedaily.com/2018/01/10/1RUDHQ3Q9L_1.jpg",
        },]
    } 

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                greeting:"Hello again",
                movies: [
                    ...this.state.movies,
                    {
                        title: "D",
                        image: "https://thumb.pann.com/tc_480/https://fimg4.pann.com/new/download.jsp?FileID=50149891",
                    },]
            })
        },5000)
    }

    render() {
        return ( 
            <div className = "App" > 
            <h1>{this.state.greeting}</h1>
            {
                this.state.movies.map((movie, index) => {
                    return <Movie title = { movie.title } image = { movie.image } key = { index }/>
                })
            } 
            </div>
        )
    }
}


export default App;