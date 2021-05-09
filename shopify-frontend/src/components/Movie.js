import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Flippy, { FrontSide, BackSide } from 'react-flippy';

export default class Movie extends React.Component {
  render() {
    return (
    <Flippy
        flipOnHover={false} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
        style={{ width: '300px', height: '400px' }} /// these are optional style, it is not necessary
    >
        <FrontSide
        style={{
            backgroundColor: '#41669d',
            backgroundImage: `url("https://source.unsplash.com/300x401")`
        }}
        >
        <h5 style={{textAlign:"center"}}>{this.props.name}</h5>
        <button type="button" class="btn btn-success">Details</button>
        <button type="button" class="btn btn-success">Nominate</button>
        </FrontSide>
        <BackSide
        style={{ backgroundColor: 'black'}}>
        Description
        </BackSide>
  </Flippy>
    );
  }
}
