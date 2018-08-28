import React, { Component } from 'react';


class DisplayMovies extends Component {
    render() {
        let forEachMovie = this.props.collectArray.map(
            eachItem => {
                return (
                    <div>
                        <h3>MovieName: {eachItem.MovieName}</h3>
                        <h3>MovieYear: {eachItem.yearReleased}</h3>
                        <h3>Genre: {eachItem.genre}</h3>
                    </div>
                );
            }
        );
        return (
            <div className="DisplayMovies">
                <h3>
                    {forEachMovie}
                </h3>
            </div>
        );
    }
}

export default DisplayMovies;