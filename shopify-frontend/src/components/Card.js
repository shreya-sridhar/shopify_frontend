import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Flippy, { FrontSide, BackSide } from 'react-flippy';

export default class Card extends React.Component {
  render() {
    return (
        <div>
        <div className = "card">
            <div className = "card-face">
                <div className = "card-label">
                    {this.props.name}
                </div>
            </div>
        </div>
    </div>
    );
  }
}
