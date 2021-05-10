import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Alert extends React.Component {
    render() {
        return(<h1 class="ribbon" style={{top:-10,position:"relative"}}>
        <strong class="ribbon-content">You've nominated 5 movies for the Shoppies!</strong>
     </h1>)
   }
}


