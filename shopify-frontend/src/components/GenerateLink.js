import React from 'react';
import Rodal from 'rodal';

// include styles
import 'rodal/lib/rodal.css';

export default class App extends React.Component {
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
        <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}><br></br>
          <div style={{fontSize:20}}>Share your nominations with your friends!</div><br></br>
          <p style={{fontSize:15}}></p>
        </Rodal>
      </div>
    );
  }
}
