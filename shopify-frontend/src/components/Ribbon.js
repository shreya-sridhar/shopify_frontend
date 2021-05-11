import React from 'react';
import Rodal from 'rodal';

// include styles
import 'rodal/lib/rodal.css';

export default class Ribbon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div>
        <Rodal visible={this.state.visible} onClose={this.hide.bind(this)} style={{backgroundColor:"maroon"}} ><br></br>
        <div style={{background:"url(https://i.pinimg.com/originals/7f/63/d1/7f63d1a4a44ffb62ea11a18b3856aa8c.gif)",padding:0,margin:0}}>
        <div style={{fontSize:20}}>Hurray!</div><br></br>
          <div style={{fontSize:20}}>You have made your 5 nominations for the Shoppies</div><br></br>
          </div>
        </Rodal>
      </div>
    );
  }
}










