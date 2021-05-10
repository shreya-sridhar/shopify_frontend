import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class CardDeck extends React.Component {
    render() {
        return ( 
              <div style={{cursor:"pointer"}}>
             <h6 style={{fontWeight:"lighter",top:-45 , position:"relative"}}>Your Nominations
             </h6>
<div class="container1" style ={{marginTop:50,zIndex:0}}>
  <div class="card1" onClick={this.props.nominations[0]? () => this.props.updateSelectedMovie(this.props.nominations[0]):undefined} style={this.props.nominations[0] ? {  background: `url(${this.props.nominations[0]["Poster"]})`,backgroundSize: "contain"} : {}}
  >
        {this.props.nominations[0]? <h6 class="title">{this.props.nominations[0]["Title"]}</h6>
         :<h6 class="title">Nomination 1</h6>}
  </div>
  <div class="card1" onClick={this.props.nominations[1]? () => this.props.updateSelectedMovie(this.props.nominations[1]):undefined} style={ this.props.nominations[1] ? {  background: `url(${this.props.nominations[1]["Poster"]})`,backgroundSize: "contain"} : {}}
  >
        {this.props.nominations[1]? <h6 class="title">{this.props.nominations[1]["Title"]}</h6>
         :<h6 class="title">Nomination 2</h6>}
    </div>
  <div class="card1" onClick={this.props.nominations[2]? () => this.props.updateSelectedMovie(this.props.nominations[2]):undefined} style={ this.props.nominations[2] ? {  background: `url(${this.props.nominations[2]["Poster"]})`,backgroundSize: "contain"} : {}}
  >
        {this.props.nominations[2]? <h6 class="title">{this.props.nominations[2]["Title"]}</h6>
         :<h6 class="title">Nomination 3</h6>}
         </div>
  <div class="card1" onClick={this.props.nominations[3]? () => this.props.updateSelectedMovie(this.props.nominations[3]):undefined} style={ this.props.nominations[3] ? {  background: `url(${this.props.nominations[3]["Poster"]})`,backgroundSize: "contain"} : {}}
  >
        {this.props.nominations[3]? <h6 class="title">{this.props.nominations[3]["Title"]}</h6>
         :<h6 class="title">Nomination 4</h6>}
         </div>
  <div class="card1" onClick={this.props.nominations[4]? () => this.props.updateSelectedMovie(this.props.nominations[4]):undefined} style={ this.props.nominations[4] ? {  background: `url(${this.props.nominations[4]["Poster"]})`,backgroundSize: "contain"} : {}}
  >
        {this.props.nominations[4]? <h6 class="title">{this.props.nominations[4]["Title"]}</h6>
         :<h6 class="title">Nomination 5</h6>}
         </div>
</div>
</div>
        )
    }
}





