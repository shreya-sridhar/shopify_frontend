import React from 'react';
import Rodal from 'rodal';

// include styles
import 'rodal/lib/rodal.css';

export default class App extends React.Component {

  render() {
    debugger
    return (
      <div>
        <Rodal visible={this.props.visible} onClose={this.props.hide}><br></br>
          <div style={{fontSize:20}}>You've already nominated 5 movies for the Shoppies!</div><br></br>
          <p style={{fontSize:15}}>If you want to add this movie to your nomination, first delete a movie from your nominations</p>
        </Rodal>
      </div>
    );
  }
}










