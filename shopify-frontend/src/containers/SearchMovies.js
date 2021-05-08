import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Movie from '../components/Movie.js'

export default class SearchMovies extends React.Component {
  render() {
    return (
        this.props.movies.map((movie) => 
            <Movie name = {movie} />
        )
    );
  }
}
