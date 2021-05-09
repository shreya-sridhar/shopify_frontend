import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class CardDeck extends React.Component {

    render() {
        return ( 
<div class="container1" style ={{marginTop:50}}>
  <div class="card1" onClick={() => this.props.updateSelectedMovie(this.props.nominations[0])} style={this.props.nominations[0] ? {  background: `url(${this.props.nominations[0]["Poster"]})`,backgroundSize: "contain"} : {}}
  >
        {this.props.nominations[0]? <h6 class="title">{this.props.nominations[0]["Title"]}</h6>
         :<h6 class="title">Nomination 1</h6>}
  </div>
  <div class="card1" onClick={() => this.props.updateSelectedMovie(this.props.nominations[1])} style={ this.props.nominations[1] ? {  background: `url(${this.props.nominations[1]["Poster"]})`,backgroundSize: "contain"} : {}}
  >
        {this.props.nominations[1]? <h6 class="title">{this.props.nominations[1]["Title"]}</h6>
         :<h6 class="title">Nomination 2</h6>}
    </div>
  <div class="card1" onClick={() => this.props.updateSelectedMovie(this.props.nominations[2])} style={ this.props.nominations[2] ? {  background: `url(${this.props.nominations[2]["Poster"]})`,backgroundSize: "contain"} : {}}
  >
        {this.props.nominations[2]? <h6 class="title">{this.props.nominations[2]["Title"]}</h6>
         :<h6 class="title">Nomination 3</h6>}
         </div>
  <div class="card1" onClick={() => this.props.updateSelectedMovie(this.props.nominations[3])} style={ this.props.nominations[3] ? {  background: `url(${this.props.nominations[3]["Poster"]})`,backgroundSize: "contain"} : {}}
  >
        {this.props.nominations[3]? <h6 class="title">{this.props.nominations[3]["Title"]}</h6>
         :<h6 class="title">Nomination 4</h6>}
         </div>
  <div class="card1" onClick={() => this.props.updateSelectedMovie(this.props.nominations[4])} style={ this.props.nominations[4] ? {  background: `url(${this.props.nominations[4]["Poster"]})`,backgroundSize: "contain"} : {}}
  >
        {this.props.nominations[4]? <h6 class="title">{this.props.nominations[4]["Title"]}</h6>
         :<h6 class="title">Nomination 5</h6>}
         </div>
</div>
        )
    }
}





