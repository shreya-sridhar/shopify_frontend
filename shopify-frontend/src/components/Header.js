import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "bootstrap/dist/css/bootstrap.min.css";
import { faShare } from '@fortawesome/free-solid-svg-icons'

export default class Header extends React.Component {
    render() {
        return ( 
            <div className="StreamsHero-image" style={{padding:5}}>
  <div className="StreamsHero-content" style={{padding:1}}>
      <div className="StreamsHero-buttonContainer" style={{padding:2}}>
      <h4 style = {{textAlign:"center"}}> SHOPPIES NOMINATIONS<button onClick = {this.props.makeLink}><FontAwesomeIcon icon={faShare}/></button></h4>
    </div>
  </div>
</div>
        )
    }
}





