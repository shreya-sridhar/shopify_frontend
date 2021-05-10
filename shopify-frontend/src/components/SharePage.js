import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ShareMovie from '../components/ShareMovie.js'

export default class SharePage extends React.Component {
    
    render() {
        debugger
        return ( 
            <div className="container mx-auto d-flex justify-content-center">
        <div className="row d-flex justify-content-center">
            <h3>Movies Your Friend Nominated for the Shoppies</h3>
          {this.props.movies && this.props.movies.map(movie =>
                <ShareMovie movie = {movie}/>)}
                
        </div>
    </div>

        )
    }
}





