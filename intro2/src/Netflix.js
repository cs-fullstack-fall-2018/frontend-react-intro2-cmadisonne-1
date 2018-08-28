import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayMovies from './DisplayMovies';

class Netflix extends Component {
    render() {
        return (
            <div className="App">

                <DisplayMovies collectArray={
                    [
                        {
                            MovieName: "Love Jones",
                            yearReleased: 1998,
                            genre: "romance",
                        },
                        {
                            MovieName: "Jason's Lyric",
                            yearReleased: 1994,
                            genre: "drama"
                        },
                        {
                            MovieName: "Idlewild",
                            yearReleased: 2006,
                            genre: "crime/drama"
                        }
                    ]
                }/>
            </div>
        );
    }
}

export default Netflix;