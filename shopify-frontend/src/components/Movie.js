import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Flippy, { FrontSide, BackSide } from 'react-flippy';

export default class Movie extends React.Component {

  state = {
    details : {}
  }

  componentDidMount(){
    fetch(`http://www.omdbapi.com/?i=${this.props.movie["imdbID"]}&apikey=41227138`)
        .then(resp => resp.json())
        .then(data => this.setState({details: data}))
  }

  render() {
    return (
    <Flippy
        ref={(r) => this.flippyHorizontal = r}
        flipOnClick={false}
        style={{ width: '300px', height: '400px', marginTop:30, marginRight:50 }} /// these are optional style, it is not necessary
    >
        <FrontSide
        style={{
            backgroundColor: '#41669d',
            background: `linear-gradient(rgba(255,255,255,0.15), rgba(255,255,255,0.15)), url(${this.props.movie["Poster"]})`
        }}
        >
        <button type="button" className="btn btn-sm btn-success" onClick={() => this.flippyHorizontal.toggle()}>Details</button>&nbsp;
        <button type="button" className="btn btn-sm btn-success" onClick={() => this.props.addToNominations(this.props.movie)}>Nominate</button>
        </FrontSide>
        <BackSide
            style={{
            backgroundColor: '#181818',
            fontSize: 10,width: '300px', height: '400px',overflowY:"scroll"
        }}>
          <div >
          <h5 style={{textAlign:"center"}}>{this.props.movie["Title"]} ({this.props.movie["Year"]})</h5>
          <h7><button type="button" onClick={() => this.flippyHorizontal.toggle()}>Back</button>
          <button type="button"><a href= {'https://www.imdb.com/title/'+`${this.props.movie["imdbID"]}/`}  target="_blank" style={{padding:1}}> IMDB Site </a></button></h7>
<p class="price-detail-wrap" style={{padding:0}}> 
	<span class="price h6 text-warning"> 
		<span class="currency">{this.state.details["Rated"]}</span><span class="num"></span>
	</span>
  <br></br>
  <span class="price h6 text-warning"> 
		<span class="currency">{this.state.details["Runtime"]}</span><span class="num"></span>
	</span> 
</p> 
<dl class="item-property" style={{padding:0}}>
  <dt>Plot</dt>
  <dd><p>{this.state.details["Plot"]}</p></dd>
</dl>
<dl class="param param-feature" style={{padding:0}}>
  <dt>Genre</dt>
  <dd> {this.state.details["Genre"]}</dd>
</dl>  
<dl class="param param-feature" style={{padding:0}}>
  <dt>Actors</dt>
  <dd>{this.state.details["Actors"]}</dd>
</dl>
<dl class="param param-feature" style={{padding:0}}>
  <dt>Director</dt>
  <dd>{this.state.details["Director"]}</dd>
</dl>
</div>
    
        </BackSide>
  </Flippy>
    );
  }
}
