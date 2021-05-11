import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "bootstrap/dist/css/bootstrap.min.css";
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons'

export default class Header extends React.Component {
    render() {
        return ( 
            <div className="StreamsHero-image" style={{padding:5}}>
  <div className="StreamsHero-content" style={{padding:1}}>
      <div className="StreamsHero-buttonContainer" style={{padding:2}}>
      <h4 style = {{textAlign:"center"}}> SHOPPIES NOMINATIONS<button title="share link" style={{fontSize:17}} onClick = {this.props.makeLink}><FontAwesomeIcon icon={faShare}/></button><button title="clear history" style={{fontSize:17}} onClick = {this.props.clearHistory}><FontAwesomeIcon icon={faTrash}/></button></h4>
    </div>
  </div>
</div>
        )
    }
}





