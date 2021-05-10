import React from 'react';
import Rodal from 'rodal';

// include styles
import 'rodal/lib/rodal.css';

export default class GenerateLink extends React.Component {

  render() {
    return (
      <div>
        <Rodal visible={this.props.visible} onClose={() => this.props.hideLink()}><br></br>
          <div style={{fontSize:20}}>Share your nominations with your friends!</div><br></br>
          <p style={{fontSize:15}}>{this.props.link !== "AA=="? this.props.link:"Nominate movies to generate link to share"}</p>
        </Rodal>
      </div>
    );
  }
}

