import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Movie from '../components/Movie.js'

export default class SearchMovies extends React.Component {
  render() {
    return (
    <div className="container mx-auto d-flex justify-content-center">
        <div className="row d-flex justify-content-center">
            {this.props.movies.map(movie =>
                <Movie movie = {movie}/>)}
        </div>
    </div>
        )
  }
}

